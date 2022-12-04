import { IsNotEmpty } from 'class-validator';

// 콘텐츠 삭제 DTO
export class RemoveContentDto {

  // 콘텐츠 ID
  @IsNotEmpty()
  id?: number;

}
