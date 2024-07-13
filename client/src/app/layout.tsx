'use client';

import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './styles/globals.css';

import { AuthProvider } from '@/contexts';
import Footer from './components/common/Footer';
import Header from './components/common/Header';

const inter = Inter({ subsets: ['latin'] });

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang='ko'>
      <AuthProvider>
        <body 
          className={inter.className}
        >
          <main 
            className='flex flex-col'
          >
            <Header />
            <div 
              className='min-h-[650px]'>{children}
            </div>
            <Footer />
          </main>
        </body>
      </AuthProvider>
    </html>
  );
}
