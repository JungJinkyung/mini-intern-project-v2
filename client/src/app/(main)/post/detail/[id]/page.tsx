'use client';

import CommentButton from '@/app/components/buttons/comment-button';
import CommentList from '@/app/components/lists/comment-list';
import HashTag from '@/app/components/tags/hash-tag';
import { useAuth } from '@/contexts';
import { processDate } from '@/utils/process-date';
import { processHashtag } from '@/utils/process-hash-tag';
import { getEmail } from '@/utils/save-email';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useRef, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

export default () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const id = usePathname().split('/')[3];
  const { isLoggedIn } = useAuth();

  const [post, setPost] = useState<Nullable<Post>>(null);
  const [nickname, setNickname] = useState<string>('');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    getNickname()
    getPostDetail()
  }, []);
  
  const getNickname= () => {
    const email = getEmail();

    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/users/${email}`)
        .then((res) => res.json())
        .then((res: any) => {
          setNickname(res.nickname);
        });
  }
  
  const getPostDetail = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
  
        return res.json();
      })
      .then((data) => {
        setPost(data);
      });
  }

  const handleAddComment = async () => {
    if (!isLoggedIn) {
      alert('✅ 로그인이 필요한 서비스 입니다!');
    }

    createComment()
  };

  const createComment = () => {
    const commentData = {
      nickname: nickname,
      content: content
    };

    fetch(
      `http://localhost:8080/posts/${id}/comments`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentData)
      }
    ).then(async (res) => {
      if (!res.ok) {
        throw new Error('Failed to add comment');
      }

      const updatedPost = await res.json();
  
      setPost(updatedPost);
      setContent('');

      if (textareaRef.current) {
        textareaRef.current.value = '';
      }
    }).catch((err) => {
      console.log(err)
    })
  }
  

  return (
    <>
      {post && (
        <div 
          className={'py-[100px] w-[1144px] mx-auto flex flex-col justify-center'}
        >
          <header 
            className={'mb-11 flex flex-col'}
          >
            <div 
              className={'flex gap-x-4 mb-[20px]'}
            >
              <FaChevronLeft 
                className={'relative top-[15px]'} 
              />
              <h1 
                className={'text-[32px] font-bold'}>{post.title}
              </h1>
            </div>
            <div 
              className={'flex align-center gap-x-2 text-base h-[27px] p-1'}
            >
              <div>{post?.nickname}</div>
              <div 
                className={'border-x-[1px] border-gray-200 px-2'}
              >
                {processDate(post.created_time)}
              </div>
              <div>{`조회수 ${post.view_count ?? 0}`}</div>
            </div>
          </header>
          <main>
            <section 
              className={'mb-4'}
            >
              <p 
                className={'min-h-[420px] w-[1140px] text-xl break-all'}
              >
                {post.content}
              </p>
            </section>
            <section 
              className={'flex py-5 gap-x-4'}
            >
              <h2 
                className={'text-xl font-normal text-main-orange'}
              >
                첨부된 파일
              </h2>
              <div 
                className={'font-bold text-xl'}>{post?.file}
              </div>
            </section>
            <section 
              className={'my-4'}
            >
              <div 
                className={'flex space-x-3'}
              >
                {processHashtag(post.hashtag)?.map((hashtag: string) => (
                  <Fragment key='1'>
                    <HashTag>{hashtag}</HashTag>
                  </Fragment>
                ))}
              </div>
            </section>
            <section 
              className={'flex gap-x-4 py-[32px] mb-2'}
            >
              <textarea
                ref={textareaRef}
                className={'w-[977px] h-[55px] p-3 border rounded mb-2 text-xl'}
                onChange={(e) => setContent(e.target.value)}></textarea>
              <CommentButton 
                handleAddComment={handleAddComment} 
              />
            </section>
            <section>
              {post.comments && <CommentList comments={post?.comments} />}
            </section>
          </main>
        </div>
      )}
    </>
  );
};
