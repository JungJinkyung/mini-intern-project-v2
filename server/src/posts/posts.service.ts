import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/posts.entity';

// export interface Post {
//   id: number;
//   category: string;
//   title: string;
//   content: string;
//   created_time: string;
//   comments: { nickname: string, created_time: string, content: string }
// }

// const posts: CreatePostDto[] = [
//   {
//     id: 1,
//     category: 'free',
//     title: '서버 테스트 임시 제목1',
//     content: '서버 테스트 임시 본문1',
//     created_time: '2024-07-04',
//   },
//   {
//     id: 2,
//     category: 'question',
//     title: '서버 테스트 임시 제목2',
//     content: '서버 테스트 임시 본문2',
//     created_time: '2024-07-04',
//   },
//   {
//     id: 3,
//     category: 'free',
//     title: '서버 테스트 임시 제목3',
//     content: '서버 테스트 임시 본문3',
//     created_time: '2024-07-04',
//   },
// ];

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}

  async findAll(category: string) {
    // 모든 레포지토리의 함수는 비동기이다.
    return this.postsRepository.find({
      where: { category },
    });
  }

  async findOne(id: number) {
    const post = await this.postsRepository.findOne({
      where: {
        id,
      },
    });

    if (!post) {
      throw new NotFoundException(); // 404 not found 에러 처리
    }

    return post;
  }

  async create({
    nickname,
    category,
    title,
    content,
    hashtag,
  }: {
    nickname: string;
    category: string;
    title: string;
    content: string;
    hashtag: string;
  }) {
    // 1) create -> 저장할 객체를 생성한다.
    // 2) save -> 객체를 저장한다. (create 메서드에서 생성한 객체로)

    const post = this.postsRepository.create({
      nickname,
      category,
      title,
      content,
      hashtag,
      created_time: String(new Date()),
    });

    const newPost = await this.postsRepository.save(post);

    return newPost;
  }

  async delete(id: number) {
    const post = await this.postsRepository.findOne({
      where: {
        id,
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    await this.postsRepository.remove(post);

    return { message: 'Post deleted successfully' };
  }

  async addComment(
    postId: number,
    {
      nickname,
      content,
    }: {
      nickname: string;
      content: string;
    },
  ) {
    const post = await this.postsRepository.findOne({
      where: { id: postId },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }

    const comment = {
      nickname,
      content,
      created_time: String(new Date()),
    };

    post.comments = post.comments ? [...post.comments, comment] : [comment];

    const updatedPost = await this.postsRepository.save(post);

    return updatedPost;
  }
}
