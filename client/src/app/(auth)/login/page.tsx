'use client';

import Button from '@/app/components/common/Button';
import LoginInput from '@/app/components/inputs/login-input';
import { useAuth } from '@/contexts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import { saveEmail } from '../utils/save-email';
import { saveToken } from '../utils/token ';
import validateLoginInputs from '../utils/validate-login-inputs';
import styles from './page.module.css';

export default () => {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const body = {
      email,
      password
    };

    if (validateLoginInputs({ setErrors, email, password })) {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}/auth/login/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then((res) => res.json())
        .then((res: any) => {
          res.message && alert(res.message);

          if (res.statusCode === 401) {
            throw new Error('로그인에 실패했습니다! 😱');
          }

          saveToken(res);
          saveEmail(email);

          setIsLoggedIn(true);

          alert('로그인에 성공했습니다. 🎉');
          router.push('/home/free');
        })
        .catch((error) => console.log(error)); // ⭐️ 이렇게 해야 에러가 잡힌다.
    }
  };

  return (
    <div 
    className={styles.container}
    >
      <h1 
        className={styles.title}>로그인
      </h1>
      <div 
        className={'flex flex-col gap-y-2'}
      >
        <LoginInput
          type={'email'}
          state={email}
          setState={setEmail}
          placeholder={'이메일 주소'}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
        <LoginInput
          type={'password'}
          state={password}
          setState={setPassword}
          placeholder={'비밀번호 입력'}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>
      <Button
        color={'black'}
        size={'xl'}
        className={'my-3'}
        onClick={(e: MouseEvent<HTMLButtonElement>) => {
          handleLogin(e);
        }}>
        로그인
      </Button>

      <div>
        <ul className='flex text-sm'>
          <li 
            className={styles['find-item']}>아이디 찾기
          </li>
          <li 
            className={styles['find-item']}>비밀번호 찾기
          </li>
          <li 
            className='px-8 my-1'
          >
            <Link 
              href='/registration'>회원가입
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
