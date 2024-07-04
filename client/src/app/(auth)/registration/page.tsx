"use client";

import Button from "@/app/components/common/Button";
import RegistrationInput from "@/app/components/inputs/registration-input";
import { useState } from "react";
import validateRegistrationInputs from "../utils/validate-registration-inputs";
import styles from "./page.module.css";

export default () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
    nickname: ""
  });

  const handleRegistrationInput = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    console.log(email, password, confirmedPassword, nickname);

    if (
      validateRegistrationInputs({
        setErrors,
        email,
        password,
        nickname,
        confirmedPassword
      })
    ) {
      try {
        /* 로그인 api 처리 로직... */
      } catch (error) {
        alert("회원가입에 실패했습니다!");
      }
    }
  };

  return (
    <div>
      <div className="h-[1111px] flex flex-col justify-center items-center">
        <h1 className="text-[#040404] text-[32px] font-bold mb-16">회원가입</h1>
        <form
          className="flex flex-col gap-y-6"
          onSubmit={handleRegistrationInput}>
          <div>
            <h2 className="text-base font-bold mb-2">이메일</h2>
            <RegistrationInput
              type="email"
              state={email}
              setState={setEmail}
              placeholder="이메일을 입력해주세요."
            />
            {errors.email && (
              <p className={`${styles.error}`}>{errors.email}</p>
            )}
          </div>
          <div>
            <h2 className="text-base font-bold mb-2">비밀번호</h2>
            <div className="flex flex-col gap-y-2">
              <RegistrationInput
                type="password"
                placeholder="8자 이상, 영문자, 숫자, 특수기호중 2가지 조합"
                state={password}
                setState={setPassword}
              />
              {errors.password && (
                <p className={`${styles.error} mb-2`}>{errors.password}</p>
              )}
              <RegistrationInput
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
                state={confirmedPassword}
                setState={setConfirmedPassword}
              />
              {errors.confirmedPassword && (
                <p className={`${styles.error}`}>{errors.confirmedPassword}</p>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-base font-bold mb-2">닉네임</h2>
            <RegistrationInput
              type="text"
              placeholder="닉네임을 입력해주세요."
              state={nickname}
              setState={setNickname}
            />
            {errors.nickname && (
              <p className={`${styles.error}`}>{errors.nickname}</p>
            )}
          </div>
          <div className="w-[384px] h-[75px] bg-[#F9F9F9] flex justify-center items-center text-base gap-x-2 rounded-lg my-2">
            <h3>개인정보 처리방침 / 데이터 활용 동의</h3>
            <h3 className="text-[#808080]">(필수)</h3>
          </div>
          <div className="w-[100%] flex justify-center">
            <Button color="black" size="md" className="mt-12">
              회원가입
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
