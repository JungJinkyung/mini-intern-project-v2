"use client";

import Button from "@/app/components/common/Button";
import LoginInput from "@/app/components/inputs/login-input";
import Link from "next/link";
import { useState } from "react";
import validateLoginInputs from "../utils/validate-login-inputs";

export default () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);

    if (validateLoginInputs({ setErrors, email, password })) {
      try {
        /* 로그인 api 처리 로직... */
      } catch (error) {
        alert("회원가입에 실패했습니다!");
      }
    }
  };

  return (
    <div className="my-0 h-[711px] flex flex-col justify-center items-center">
      <h1 className="text-gray-800 text-[32px] font-bold mb-4">로그인</h1>
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-y-2">
          <LoginInput
            type="email"
            state={email}
            setState={setEmail}
            placeholder="이메일 주소"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
          <LoginInput
            type="password"
            state={password}
            setState={setPassword}
            placeholder="비밀번호 입력"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <Button color="black" size="xl" className="my-3">
          로그인
        </Button>
      </form>
      <div>
        <ul className="flex text-sm">
          <li className="text-gray border-r-[1.2px] border-gray px-8 my-1 cursor-not-allowed">
            아이디 찾기
          </li>
          <li className="text-gray border-r-[1.2px] border-gray px-8 my-1 cursor-not-allowed">
            비밀번호 찾기
          </li>
          <li className="px-8 my-1">
            <Link href="/registration">회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
