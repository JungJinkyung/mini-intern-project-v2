import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':email')
  async getMeDataByEmail(@Param('email') email: string) {
    const user = await this.usersService.getUserByEmail(email);

    return user;
  }

  // @Post()
  // createUser(
  //   @Body('nickname') nickname: string,
  //   @Body('email') email: string,
  //   @Body('password') password: string,
  // ) {
  //   // console.log('users controller', nickname, email, password);

  //   return this.usersService.createUser({ nickname, email, password });
  // }
}
