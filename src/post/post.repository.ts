import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@CustomRepository(Post)
export class PostRepository extends Repository<Post> {

  // 포스트의 연도 및 개수를 조회한다.
  async listYearAndCount(): Promise<Post[]> {
    return await this.createQueryBuilder('post')
      .select([
        "DISTINCT(YEAR(reg_date)) AS year",
        "COUNT('year') AS count",
      ])
      .groupBy('year')
      .orderBy('year', 'DESC')
      .getRawMany();
  }

  // 연도별 포스트 목록을 조회한다.
  async listPostsByYear(year: string): Promise<Post[]> {
    return await this.createQueryBuilder('post')
      .select([
        "id",
        "title",
        "secret_yn",
        "DATE_FORMAT(reg_date, '%Y.%m.%d') AS regDate"
      ])
      .where("YEAR(reg_date) = :year", { year })
      .orderBy('reg_date', 'DESC')
      .getRawMany();
  }

}