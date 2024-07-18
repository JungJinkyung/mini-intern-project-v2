'use client';

import { useAuth } from '@/contexts';
import { clearToken, getToken } from '@/utils/token';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../buttons/default-button';
import AlertModal from '../modals/alert-modal/alert-modal';

export default () => {
  const router = useRouter()
  const { setIsLoggedIn, isLoggedIn } = useAuth();

  const [alertModalOpened, setAlertModalOpened] = useState<boolean>(false)
  const [alertModalTitle, setAlertModalTitle] = useState<string>('알림')
  const [alertModalBody, setAlertModalBody] = useState<string>('')

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    clearToken();

    setIsLoggedIn(false);

    setAlertModalBody('로그아웃이 완료되었습니다.') // 여기에는 defaultModal을 넣어서 확인/취소를 넣는게 맞겠다.
    setAlertModalOpened(true)
  };

  const goToLoginPage = () => {
    router.push('/login')
  }

  return (
    <>
      {
        <header 
          className={'bg-white h-[88px] w-full border-b border-gray-200 z-50'}
        >
          <div 
            className={'w-[1140px] h-full flex items-center justify-between m-auto px-4'}
          >
            <nav 
              className={'flex items-center space-x-4'}
            >
              <Link 
                href='/post/free'
                className={'text-2xl font-bold text-red-MAIN'}>TestSite
              </Link>
              <div 
                className={'text-gray-800 text-lg flex'}
              >
                <Link 
                  href='/post/free' 
                  className={'px-3 py-2 hover:text-gray-300'}
                >
                  게시판
                </Link>
                <Link 
                  href='/dashboard' 
                  className={'px-3 py-2 hover:text-gray-300'}
                >
                  대시보드
                </Link>
              </div>
            </nav>
            <div>
              {isLoggedIn ? (
                <button
                  className={'text-gray-800 text-xl font-bold'}
                  onClick={handleLogout}>
                  로그아웃
                </button>
              ) : (
                  <Button 
                    onClick={() => goToLoginPage()}
                    color={'white'}
                    size={'base'}>로그인
                  </Button>
              )}
            </div>
          </div>
        </header>
      }
      {
        alertModalOpened && (
          <AlertModal
            title={alertModalTitle}
            body={alertModalBody}
            confirmText={'확인'}
            setModalOpened={setAlertModalOpened}
          />
        )
      }
    </>
  );
};
