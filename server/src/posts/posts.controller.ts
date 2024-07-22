import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

// interface Post {
//   id: number;
//   category: string;
//   title: string;
//   content: string;
//   hashtag: string;
//   created_time: string;
// }

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  // 1) GET /posts/:category
  // @Get(':category')
  // getPosts(@Param('category') category: string) {
  //   return this.postsService.findAll(category);
  // }

  // 2) GET /posts/:id
  // @Get(':id')
  // getPostBy(@Param('id') id: string) {
  //   return this.postsService.findOne(+id);
  // }

  // 1) GET /posts/:category
  // 2) GET /posts/:id
  @Get(':param')
  async getPost(@Param('param') param: string) {
    if (isNaN(Number(param))) {
      // param이 숫자가 아니면 category로 간주
      return this.postsService.findAll(param);
    } else {
      // param이 숫자면 id로 간주
      return this.postsService.findOne(+param);
    }
  }

  // 3) POST /posts
  @UseGuards(JwtAuthGuard)
  @Post()
  postPosts(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  // 4) PATCH /posts/id/comments
  @UseGuards(JwtAuthGuard)
  @Patch(':id/comments')
  addComment(
    @Param('id') id: number,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.postsService.addComment(+id, createCommentDto);
  }

  // 5) DELETE /posts/id
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deletePost(@Param('id') id: number) {
    return this.postsService.delete(id);
  }

  // 6) PATCH /posts/id
  @Patch(':id')
  increaseViewCount(@Param('id') id: number) {
    return this.postsService.increaseViewCount(+id);
  }
}
