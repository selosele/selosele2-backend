import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PostReplyRepository } from "../repositories/post-reply.repository";

@Injectable()
export class PostReplyService {
  
  constructor(
    @InjectRepository(PostReplyRepository)
    private readonly postReplyRepository: PostReplyRepository,
  ) {}

}