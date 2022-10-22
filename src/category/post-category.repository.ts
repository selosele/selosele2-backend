import { CustomRepository } from "src/configs/CustomRepository";
import { Repository } from "typeorm";
import { PostCategory } from "./post-category.entity";

@CustomRepository(PostCategory)
export class PostCategoryRepository extends Repository<PostCategory> {}
