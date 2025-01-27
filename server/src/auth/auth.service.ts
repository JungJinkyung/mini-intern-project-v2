import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  // 토큰을 사용하게 되는 방식
  // 1) 사용자가 로그인 또는 회원가입을 진행하면
  // accessToken과 refreshToken을 발급받는다.
  // 2) 로그인 할때는 Basic 토큰은 '이메일:비밀번호'를 Basic64로 인코딩한 형태이다.
  // ex) {authorization: 'Basic {token}'}
  // 3) 아무나 접근 할 수 없는 정보 (private route)를 접근 할때는 accessToken을 Header에 추가해서 요청과 함께 보낸다.
  // ex) {authorization: 'Bearer {token}'}
  // 4) 토큰과 요청을 함께 받은 서버는 토큰 검증을 통해 현재 요청을 보낸 사용자가 누구인지 알 수 있다.
  // ex) 현재 로그인한 사용자가 작성한 포스트만 가져오려면 토큰의 sub 값에 입력돼있는 사용자의 포스트만 따로 필터링 할 수 있다.
  // 특정 사용자의 토큰이 없다면 다른 사용자의 데이터에 접근 못한다.
  // 5) 모든 토큰은 만료 기간이 있다. 만료기간이 지나면 새로 토큰을 발급받아야 한다.
  // 그렇지 않으면 jwtService.verify()에서 인증이 통과 안된다.
  // 그러니 access 토큰을 새로 받을 수 있는 /auth/token/access와 refresh 토큰을 새로 발급 할 수 있는 /auth/token/refresh 가 필요하다.
  // 토큰이 만료되면 각각의 토큰을 새로 받을 수 있는 엔드포인트에 요청을 해서 새로운 토큰을 발급받고 새로운 토큰을 사용해서 private route에 접근한다.

  async extractTokenFromHeader(header: string, isBearer: boolean) {
    const splitToken = header.split(' ');

    const prefix = isBearer ? 'Bearer' : 'Basic';

    if (splitToken.length !== 2 || splitToken[0] !== prefix) {
      throw new UnauthorizedException('잘못된 토큰입니다.');
    }

    const token = splitToken[1];

    return token;
  }

  async loginWithEmail(user: Pick<User, 'email' | 'password'>) {
    const existingUser = await this.authenticatedWithEmailAndPassword(user);

    return this.loginUser(existingUser);
  }

  async registerWithEmail(user: Pick<User, 'nickname' | 'email' | 'password'>) {
    const hash = await bcrypt.hash(user.password, 10);

    const newUser = await this.usersService.createUser({
      ...user,
      password: hash,
    });

    return this.loginUser(newUser);
  }

  loginUser(user: Pick<Auth, 'id' | 'email'>) {
    return {
      accessToken: this.signToken(user, false),
      refreshToken: this.signToken(user, true),
      message: '로그인에 성공했습니다.',
    };
  }

  // payload에 들어갈 정보 1) email 2) sub -> id 3) type : 'access' | 'refresh'
  signToken(user: Pick<Auth, 'email' | 'id'>, isRefreshToken: boolean) {
    const payload = {
      email: user.email,
      sub: user.id,
      type: isRefreshToken ? 'refresh' : 'access',
    };

    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: isRefreshToken ? 3600 : 300,
    });
  }

  // Auth에 들어갈 비밀번호는 해시값이 저장된다.
  //  1. 사용자가 존재하는지 확인
  //  2. 비밀번호가 맞는지 확인
  //  3. 모두 통과하면 찾은 사용자 정보 반환
  async authenticatedWithEmailAndPassword(
    user: Pick<Auth, 'email' | 'password'>,
  ) {
    const existingUser = await this.usersService.getUserByEmail(user.email);

    if (!existingUser) {
      throw new UnauthorizedException('존재하지 않는 사용자입니다.');
    }

    // bcrypt 1) 입력된 비밀번호 2) 기존 해시 (hash) -> 사용자 정보에 저장돼 있는 hash
    const passOk = await bcrypt.compare(user.password, existingUser.password);

    if (!passOk) {
      throw new UnauthorizedException('비밀번호가 틀렸습니다.');
    }

    return existingUser;
  }
}

// 1) registerWithEmail (3을 이용해서)
//   - email, nickname, password를 입력받고 사용자를 생성한다.
//   - 생성이 완료되면 accessToken과 refreshToken을 반환한다.

//   2) loginWithEmail (3을 이용해서)
//   - email, password를 입력하면 사용자 검증을 진행한다.
//   - 검증이 완료되면 accessToken과 refreshToken을 반환한다.

//   3) loginUser
//   - (1)과 (2)에서 필요한 accessToken과 refreshToken을 반환하는 로직

//   4) signToken (토큰 생성)
//   - (3)에서 필요한 accessToken과 refreshToken을 sign하는 로직

//   5) authenticatedWithEmailAndPassword
//   - (2)에서 로그인을 진행할때 필요한 기본적인 검증 진행
//      1. 사용자가 존재하는지 확인
//      2. 비밀번호가 맞는지 확인
//      3. 모두 통과하면 찾은 사용자 정보 반환
//      4. loginWithEmail에서 반환된 데이터를 기반으로 토큰 생성
