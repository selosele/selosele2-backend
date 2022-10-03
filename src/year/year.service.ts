import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/post/post.entity';
import { PostRepository } from 'src/post/post.repository';

@Injectable()
export class YearService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: PostRepository,
  ) {}

  // 포스트의 연도 및 개수를 조회한다.
  async findYearAndCount(): Promise<Post[]> {
    return await this.postRepository
      .createQueryBuilder('post')
        .select([
          "DISTINCT(YEAR(reg_date)) AS year",
          "COUNT('year') AS count",
        ])
        .groupBy('year')
        .orderBy('year', 'DESC')
        .getRawMany();
  }

  // 연도별 포스트 목록을 조회한다.
  async findPostsByYear(year: string): Promise<Post[]> {
    return await this.postRepository
      .createQueryBuilder('post')
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
