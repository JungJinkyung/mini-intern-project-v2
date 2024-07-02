import Button from "@/app/components/common/Button";
import Link from "next/link";

export default () => {
  return (
    <div className="my-0 h-[711px] flex flex-col justify-center items-center">
      <h1 className="text-[#040404] text-[32px] font-bold mb-4">로그인</h1>
      <form /* onSubmit={handleLogin} */>
        <div className="flex flex-col gap-y-2">
          <input
            className="w-[383px] h-[52px] border-[1px] rounded border-[#E1E1E1] p-5"
            type="email"
            placeholder="이메일 주소"
            /* onChange={handleEmail} */
          />
          {/* {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )} */}
          <input
            className="w-[383px] h-[52px] border-[1px] rounded border-gray-200 p-5"
            type="password"
            placeholder="비밀번호 입력"
            /* onChange={handlePassword} */
          />
          {/* {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )} */}
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
