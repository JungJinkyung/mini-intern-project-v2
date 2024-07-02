import Link from "next/link";
import Button from "./Button";

export default () => {
  return (
    <header className="bg-white h-[88px] w-full border-b border-gray-200 z-50">
      <div className="w-[1140px] h-full flex items-center justify-between m-auto px-4">
        <nav className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-red-MAIN">TestSite</h1>
          <div className="text-gray-800 text-lg flex">
            <Link href="/home/free" className="px-3 py-2 hover:text-gray-300">
              게시판
            </Link>
            <Link href="/dashboard" className="px-3 py-2 hover:text-gray-300">
              대시보드
            </Link>
          </div>
        </nav>
        <div>
          <Link href="/login">
            <Button color="white" size="base">
              로그인
            </Button>
          </Link>
          {/* <button className="text-gray-800 text-xl font-bold">정진경 님</button> */}
        </div>
      </div>
    </header>
  );
};
