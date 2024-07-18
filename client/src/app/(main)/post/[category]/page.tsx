'use client';

import Button from '@/app/components/buttons/default-button';
import PostList from '@/app/components/lists/post-list';
import AlertModal from '@/app/components/modals/alert-modal/alert-modal';
import BoardSelectorTab from '@/app/components/tabs/board-selector-tab';
import { useAuth } from '@/contexts';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default () => {
  const router = useRouter();
  const category = usePathname().split('/')[2];
  
  const { isLoggedIn } = useAuth();

  const [posts, setPosts] = useState([]);
  const [alertModalOpened, setAlertModalOpened] = useState<boolean>(false)
  const [alertModalTitle, setAlertModalTitle] = useState<string>('알림')
  const [alertModalBody, setAlertModalBody] = useState<string>('')

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/posts/${category}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        return res.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }

  const handleCreatePostButton = () => {
    if (isLoggedIn) {
      router.push(`/post/create/${category}`);
    } else {
      setAlertModalBody('✅ 로그인이 필요한 서비스 입니다!')
      setAlertModalOpened(true)
    }
  };

  return (
    <>
      {
        <div 
        className={'min-h-[1069px] flex flex-col justify-center items-center'}
        >
          <div>
            <h3 
              className={'text-red-MAIN text-[20px] font-bold text-center'}
            >board
            </h3>
            <h1 
              className={'text-[32px] font-bold my-3'}
            >자유 게시판</h1>
          </div>
          <div>
            <BoardSelectorTab />
            <div>
              <div 
                className={'h-[600px]'}
              >
                <PostList
                  posts={posts}
                  className={'mt-10'}
                />

                <Button
                  color={'black'}
                  size={'base'}
                  className={'relative top-6 left-[1020px]'}
                  onClick={handleCreatePostButton}>
                  글쓰기
                </Button>
              </div>
            </div>
          </div>
        </div>
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
