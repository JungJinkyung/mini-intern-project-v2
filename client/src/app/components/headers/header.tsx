'use client';

import LogoutModal from '@/app/components/modals/default-modal/default-modal';
import { useAuth } from '@/contexts';
import { clearToken, getToken } from '@/utils/token';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Button from '../buttons/default-button';

export default () => {
  const router = useRouter()
  const { setIsLoggedIn, isLoggedIn, setNickname } = useAuth();

  const [logoutModalOpened, setLogoutModalOpened] = useState<boolean>(false);
  const [logoutModalTitle, setLogoutModalTitle] = useState<string>('')
  const [logoutModalBody, setLogoutModalBody] = useState<string>('')

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setLogoutModalBody('로그아웃 하시겠습니까?') 
    setLogoutModalOpened(true)
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
                href={'/post/free'}
                className={'text-2xl font-bold text-red-MAIN'}>TestSite
              </Link>
              <div 
                className={'text-gray-800 text-lg flex'}
              >
                <Link 
                  href={'/post/free'}
                  className={'px-3 py-2 hover:text-gray-300'}
                >
                  게시판
                </Link>
                <Link 
                  href={'/dashboard'} 
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
        logoutModalOpened && (
          <LogoutModal
            title={"로그아웃"}
            body={logoutModalBody}
            confirmText={'확인'}
            confirmHandler={() => {
              clearToken();
              setIsLoggedIn(false);
              setNickname('')
              setLogoutModalOpened(false);
            }}
            cancelText={'취소'}
            cancelHandler={() => {
              setLogoutModalOpened(false);
            }}
          />
        )
      }
    </>
  );
};
