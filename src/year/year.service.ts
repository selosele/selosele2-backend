import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/posts/posts.entity';
import { PostsRepository } from 'src/posts/posts.repository';

@Injectable()
export class YearService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: PostsRepository,
  ) {}

  // 포스트의 연도 및 개수를 조회한다.
  async findYearAndCount(): Promise<Posts[]> {
    return await this.postsRepository
      .createQueryBuilder('posts')
        .select([
          "DISTINCT(YEAR(create_at)) AS year",
          "COUNT('year') count",
        ])
        .groupBy('year')
        .orderBy('year', 'DESC')
        .getRawMany();
  }

  // 연도별 포스트 목록을 조회한다.
  async findPostsByYear(year: string): Promise<Posts[]> {
    return await this.postsRepository
      .createQueryBuilder('posts')
        .select([
          "id",
          "title",
          "secret",
          "DATE_FORMAT(create_at, '%Y.%m.%d') AS date"
        ])
        .where("YEAR(create_at) = :year", { year })
        .orderBy('create_at', 'DESC')
        .getRawMany();
  }

}
