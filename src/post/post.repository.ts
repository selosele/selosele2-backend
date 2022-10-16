import { CustomRepository } from 'src/configs/CustomRepository';
import { Repository } from 'typeorm';
import { SearchPostDto } from './dto/search-post.dto';
import { Post } from './post.entity';

@CustomRepository(Post)
export class PostRepository extends Repository<Post> {

  // 포스트를 검색한다.
  async listPostSearch(searchPostDto: SearchPostDto): Promise<Post[]> {
    return await this.createQueryBuilder('post')
      .select([
        "id",
        "title",
        "DATE_FORMAT(reg_date, '%Y.%m.%d') AS regDate",
        "DATE_FORMAT(reg_date, '%Y-%m-%d %H:%i:%S') AS dateTime",
        "SUBSTR(\`raw_text\`, 1, 180) AS rawText",
        "og_img_url",
      ])
      .where("title LIKE :title", { title: `%${searchPostDto.q}%` })
      .orWhere("raw_text LIKE :raw_text", { raw_text: `%${searchPostDto.q}%` })
      .orderBy("reg_date", "DESC")
      .getRawMany();
  }

  // 포스트의 연도 및 개수를 조회한다.
  async listYearAndCount(): Promise<Post[]> {
    return await this.createQueryBuilder('post')
      .select([
        "DISTINCT(YEAR(reg_date)) AS year",
        "COUNT('year') AS count",
      ])
      .groupBy("year")
      .orderBy("year", "DESC")
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
      .orderBy("reg_date", "DESC")
      .getRawMany();
  }

}