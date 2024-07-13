import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '위어드섹터 인턴 - 로그인'
};

export default ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
