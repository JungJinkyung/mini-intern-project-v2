import { Dispatch } from 'react';

export default ({
  setErrors,
  email,
  password,
  nickname,
  confirmedPassword
}: {
  setErrors: Dispatch<any> | Function;
  email: string;
  password: string;
  nickname: string;
  confirmedPassword: string;
}) => {
  let isValid = true;

  let newErrors = {
    email: '',
    password: '',
    confirmedPassword: '',
    nickname: ''
  };

  if (email === '') {
    newErrors.email = '이메일을 입력해주세요.';
    isValid = false;
  }

  if (password === '') {
    newErrors.password = '비밀번호를 입력해주세요.';
    isValid = false;
  }

  if (password !== confirmedPassword) {
    newErrors.confirmedPassword = '비밀번호가 일치하지 않습니다.';
  }

  if (nickname === '') {
    newErrors.nickname = '닉네임을 입려해주세요.';
    isValid = false;
  }

  setErrors(newErrors);

  return isValid;
};
