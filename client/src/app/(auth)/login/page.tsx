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

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      email,
      password
    };

    if (validateLoginInputs({ setErrors, email, password })) {
      try {
        fetch("http://localhost:8080/auth/login/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
          .then((res) => res.json())
          .then((res: any) => {
            res.message && alert(res.message);

            saveToken(res);

            saveEmail(email);
            setIsLoggedIn(true);

            alert("로그인에 성공했습니다. 🎉");
            router.push("/home/free");
          });
      } catch (error) {
        alert(`로그인에 실패했습니다! ${error}`);
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
