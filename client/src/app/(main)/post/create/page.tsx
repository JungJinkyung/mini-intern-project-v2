import Button from "@/app/components/common/Button";

export default () => {
  return (
    <div className="h-[921px] flex flex-col justify-center items-center">
      <h1 className="text-gray-800 text-[32px] font-bold mt-16 mb-10">
        게시글 작성
      </h1>
      <form
        className="flex flex-col gap-y-4 text-xl"
        // onSubmit={handleCreatePost}
      >
        <div className="flex items-center gap-x-2">
          <h2 className="text-xl font-bold w-[140px]">제목</h2>
          <input
            className="w-[984px] h-[55px] border-[1px] rounded border-gray-200 px-5 py-4 placeholder-main-orange"
            type="text"
            /* onChange={handleTitle}
        placeholder={errors.title && errors.title} */
          />
        </div>
        <div className="flex gap-x-2">
          <h2 className="text-xl font-bold w-[140px] pt-3">내용</h2>
          <textarea
            className="w-[984px] h-[320px] border-[1px] rounded border-[#E1E1E1] px-5 py-4 placeholder-main-orange"
            /*  onChange={handleText}
        placeholder={errors.text && errors.text} */
          />
        </div>
        <div className="flex items-center gap-x-2">
          <h2 className="text-xl font-bold w-[140px]">파일 첨부</h2>
          <input
            /* ref={fileInputRef} */
            className="hidden"
            type="file"
            /* onChange={handleFile} */
          />
          <div
            className="w-[984px] h-[55px] border-[1px] rounded border-[#E1E1E1] px-5 py-4 bg-white cursor-pointer flex justify-start"
            /* onClick={handleFileButtonClick} */
          >
            {/* {file ?? "임시 파일"} */}
            임시 input 부분
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <h2 className="text-xl font-bold w-[140px]">해시태그</h2>
          <input
            className="w-[984px] h-[55px] border-[1px] rounded border-[#E1E1E1] px-5 py-4"
            type="text"
            placeholder="# 을 붙여주세요!  ex) #해시 #태그 #게시글 #작성"
            /*  onChange={handleHashtag} */
          />
        </div>
        <Button color="black" size="lg" className="relative m-auto my-10">
          게시글 작성
        </Button>
      </form>
    </div>
  );
};
