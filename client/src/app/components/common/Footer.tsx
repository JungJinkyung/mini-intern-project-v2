export default () => {
  return (
    <footer 
      className="text-gray-800 h-[330px] border-t border-gray-200"
    >
      <div 
        className="grid grid-cols-3 w-[1140px] h-3/5 mx-auto mt-14"
      >
        <div 
          className="px-4"
        >
          <h2 
            className="font-semibold text-base">개발자 테스트용
          </h2>
        </div>
        <div 
          className="px-4"
        >
          <ul 
            className="mt-2 text-sm"
          >
            <li>대표 홍길동 ㅣ 사업자 등록 번호 123-4567-890</li>
            <li>서울특별시 가가동 나나로 111-2 8층</li>
            <li>통신 판매업 신고 제 2014-서울홍홍홍 0291호</li>
          </ul>
        </div>
        <div 
          className="pl-40"
        >
          <ul 
            className="mt-2 text-sm"
          >
            <li>고객지원 111-2345</li>
            <li>이메일 help@gmail.com</li>
            <li>평일 09:00 - 17:00 토,일 공휴일 휴무</li>
          </ul>
        </div>
      </div>
      <div 
        className="text-center text-[#B8B7B7] py-6 text-[10px] border-t mt-4"
      >
        <p>이용약관 개인정보처리방침</p>
        <p>Copyright ©2023 Data nugget. All rights reserved.</p>
      </div>
    </footer>
  );
};
