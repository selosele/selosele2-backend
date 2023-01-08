import { CustomRepository } from "src/configs/CustomRepository";
import { Repository } from "typeorm";
import { PostReplyEntity } from "./entities/post-reply.entity";

@CustomRepository(PostReplyEntity)
export class PostReplyRepository extends Repository<PostReplyEntity> {

  

}