"use client";

import Button from "@/app/components/common/Button";
import LoginInput from "@/app/components/inputs/login-input";
import { useAuth } from "@/contexts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { saveEmail } from "../utils/save-email";
import { saveToken } from "../utils/token ";
import validateLoginInputs from "../utils/validate-login-inputs";

export default () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const router = useRouter();

  const { setIsLoggedIn } = useAuth();

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const body = {
      email,
      password
    };

    if (validateLoginInputs({ setErrors, email, password })) {
      try {
        fetch(`${process.env.NEXT_PUBLIC_API_HOST}/auth/login/email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then((res) => res.json())
          .then((res: any) => {
            res.message && alert(res.message);

            if (res.statusCode === 401) {
              throw new Error("로그인에 실패했습니다! 😱");
            }

            saveToken(res);

            saveEmail(email);
            setIsLoggedIn(true);

            alert("로그인에 성공했습니다. 🎉");
            router.push("/home/free");
          })
          .catch((error) => console.log(error)); // ⭐️ 이렇게 해야 에러가 잡힌다.
      } catch (error) {
        // res를 받은거면 가장 하단 catch로 가지 않는다! 하려면 then 뒤로 catch 붙여서 해야한다.
        alert(`로그인에 실패했습니다! ${error}`);
      }
    }
  };

  return (
    <div className="my-0 h-[711px] flex flex-col justify-center items-center">
      <h1 className="text-gray-800 text-[32px] font-bold mb-4">로그인</h1>
      <div className="flex flex-col gap-y-2">
        <LoginInput
          type="email"
          state={email}
          setState={setEmail}
          placeholder="이메일 주소"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
      <Button
        color="black"
        size="xl"
        className="my-3"
        onClick={handleLogin}>
        로그인
      </Button>

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
