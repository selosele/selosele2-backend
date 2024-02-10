import { DeleteResult, EntityManager, Repository } from 'typeorm';
import { CustomRepository } from '@/database/repository/custom-repository.decorator';
import { BlogConfigEntity, GetBlogConfigDto, SaveBlogConfigDto, UpdateBlogConfigUseYnDto } from '../models';

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
      order: {
        id: 'DESC'
      }
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

  /** 블로그 환경설정을 추가/수정한다. */
  async saveBlogConfig(saveBlogConfigDto: SaveBlogConfigDto): Promise<BlogConfigEntity> {
    return await this.save(saveBlogConfigDto);
  }

  /** 블로그 환경설정 사용 여부를 수정한다. */
  async updateBlogConfigUseYn(updateBlogConfigUseYnDto: UpdateBlogConfigUseYnDto): Promise<BlogConfigEntity> {
    let result: BlogConfigEntity;

    // 트랜잭션을 시작한다.
    await this.manager.transaction<void>(async (em: EntityManager) => {

      // 1. 사용 처리 데이터를 제외한 모든 데이터를 미사용으로 변경한다.
      await em.withRepository(this).createQueryBuilder('blogConfig')
        .update()
        .set({
          useYn: 'N'
        })
        .where("id != :id", { id: updateBlogConfigUseYnDto.id })
        .execute();
  
      // 2. 사용 처리 데이터를 사용으로 변경한다.
      await em.withRepository(this).update(updateBlogConfigUseYnDto.id, {
        useYn: updateBlogConfigUseYnDto.useYn
      });
  
      // 3. 사용으로 변경된 데이터를 조회한다.
      result = await em.withRepository(this).findOne({
        where: { id: updateBlogConfigUseYnDto.id }
      });
    });

    return result;
  }

  /** 블로그 환경설정을 삭제한다. */
  async removeBlogConfig(id: number): Promise<DeleteResult> {
    return await this.delete(id);
  }

}
