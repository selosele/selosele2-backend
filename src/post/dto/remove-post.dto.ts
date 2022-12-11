import { IsNotEmpty } from 'class-validator';

// 포스트 삭제 DTO
export class RemovePostDto {

  // 포스트 ID 목록
  @IsNotEmpty()
  id?: number;

}
