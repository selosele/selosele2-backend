import { CustomRepository } from "src/configs/CustomRepository";
import { Repository } from "typeorm";
import { PostReplyEntity } from "../models";

@CustomRepository(PostReplyEntity)
export class PostReplyRepository extends Repository<PostReplyEntity> {

  

}