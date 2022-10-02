import { Controller } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostService) {}
}
