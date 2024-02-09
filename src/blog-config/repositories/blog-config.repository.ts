import { DeleteResult, Repository } from 'typeorm';
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

  /** 블로그 환경설정을 수정한다. */
  async updateBlogConfig(updateBlogConfigDto: UpdateBlogConfigDto): Promise<BlogConfigEntity> {

    // TODO: 쿼리 4번 실행되는 아래 로직을 UPDATE 1번, SELECT 1번 실행으로 개선하고 트랜잭션 적용하기

    // 1. 수정 환경설정 데이터를 제외한 데이터들의 사용 여부를 'N'으로 변경한다.
    await this.createQueryBuilder('blogConfig')
      .update()
      .set({ useYn: 'N' })
      .where('id != :updateId', { updateId: updateBlogConfigDto.updateId })
      .execute();

    // 2. 수정 환경설정 데이터의 사용 여부를 'Y'로 변경한다.
    await this.createQueryBuilder('blogConfig')
      .update()
      .set({ useYn: 'Y' })
      .where('id = :updateId', { updateId: updateBlogConfigDto.updateId })
      .execute();

    // delete updateBlogConfigDto.updateId;
    // TODO: updateBlogConfigDto는 entity와 매핑되지 않는 속성이 있어서 아래 update 수행 시 오류 발생

    // 3. 환경설정 데이터를 수정한다.
    await this.createQueryBuilder('blogConfig')
      .update()
      .set(updateBlogConfigDto)
      .where('id = :id', { id: updateBlogConfigDto.id })
      .execute();

    // 4. 수정된 환경설정 데이터를 반환한다.
    return await this.findOne({
      where: { id: updateBlogConfigDto.id },
    });
  }

  /** 블로그 환경설정을 삭제한다. */
  async removeBlogConfig(id: number): Promise<DeleteResult> {
    return await this.delete(id);
  }

}
