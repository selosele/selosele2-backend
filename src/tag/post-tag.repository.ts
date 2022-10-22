import { CustomRepository } from "src/configs/CustomRepository";
import { Repository } from "typeorm";
import { PostTag } from "./post-tag.entity";

@CustomRepository(PostTag)
export class PostTagRepository extends Repository<PostTag> {}
