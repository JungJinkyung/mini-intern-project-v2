import { MouseEventHandler, PropsWithChildren } from 'react';

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl';
  color: 'black' | 'white' | 'orange' | 'grey';
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// xs: 'w-[58px] h-10', text-sm, weight-500 (삭제 모달)
// sm: 'w-[127px] h-[37px]', text-sm, weight-400(font-normal) (boardTapSelector)
// base: 'w-[127px] h-[48px]', text-lg, weight-500 (로그인, 회원가입 완료, board)
// md: 'w-[142px] h-[48px]', text-lg (18px), weight-500 (회원가입)
// lg: 'w-[162px] h-[48px]', text-lg, weight-500 (글 작성)
// xl: 'w-[383px] h-[52px]', text-lg, weight-500 (로그인)

export default ({
  size = 'sm',
  color = 'black',
  active = false,
  children,
  className,
  onClick,
  ...props
}: PropsWithChildren<props>) => {
  const sizes = {
    xs: 'w-[58px] h-10 text-sm',
    sm: 'w-[127px] h-[37px] text-sm font-normal',
    base: 'w-[127px] h-[48px] text-lg',
    md: 'w-[142px] h-[48px] text-lg',
    lg: 'w-[162px] h-[48px] text-lg',
    xl: 'w-[383px] h-[52px] text-lg'
  };

  const colors = {
    black: 'bg-black text-white rounded hover:bg-gray-700',
    white:
      'bg-white text-black rounded border-[1px] border-hover-gray-200 hover:bg-gray-200',
    grey: 'bg-gray-100 text-main-black rounded hover:bg-gray-300',
    orange: 'bg-red-MAIN text-white rounded hover:bg-red-400'
  };

  return (
    <button
      className={`${sizes[size]} ${colors[color]} ${className}`}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
};