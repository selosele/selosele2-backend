import { Repository } from 'typeorm';
import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { BlogConfigEntity, GetBlogConfigDto, UpdateBlogConfigDto } from '../models';

@CustomRepository(BlogConfigEntity)
export class BlogConfigRepository extends Repository<BlogConfigEntity> {

  /** 블로그 환경설정을 조회한다. */
  async getBlogConfig(getBlogConfigDto: GetBlogConfigDto): Promise<BlogConfigEntity> {
    return await this.findOne({
      where: {
        id: getBlogConfigDto.id,
        useYn: getBlogConfigDto.useYn || 'Y'
      }
    });
  }

  /** 블로그 환경설정 목록을 조회한다. */
  async listBlogConfig(): Promise<[BlogConfigEntity[], number]> {
    return await this.findAndCount({
      where: { useYn: 'Y' }
    });
  }

  /** 메인 포스트 목록 출력 개수를 조회한다. */
  async getPageSize(): Promise<number> {
    return await this.findOne({
      where: { useYn: 'Y' }
    }).then(blogConfig => blogConfig.pageSize);
  }

  /** 카카오 메시지 수신 여부를 조회한다. */
  async getKakaoMsgYn(): Promise<string> {
    return await this.findOne({
      where: { useYn: 'Y' }
    }).then(blogConfig => blogConfig.kakaoMsgYn);
  }

  /** 블로그 환경설정을 수정한다. */
  async updateBlogConfig(updateBlogConfigDto: UpdateBlogConfigDto): Promise<BlogConfigEntity> {
    return await this.save(updateBlogConfigDto);
  }

}
