import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '위어드섹터 인턴 - 포스트 상세 페이지'
};

export default ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
