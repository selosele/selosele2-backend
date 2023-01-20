import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PostReplyService } from "../services/post-reply.service";

@Controller('postreply')
@ApiTags('포스트 댓글 API')
export class PostReplyController {

  constructor(
    private readonly postReplyService: PostReplyService,
  ) {}

}
