import { Body, Query, Controller, Post, Get, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AddSatisfactionDto, SearchSatisfactionDto, SatisfactionEntity, SatisfactionDto } from '../models';
import { SatisfactionService } from '../services/satisfaction.service';
import { Auth, Ip, IsAuthenticated } from '@/shared/decorators';
import { Roles } from '@/auth/models';
import { BizException } from '@/shared/exceptions/biz/biz-exception';
import { serialize } from '@/shared/utils';

@Controller('satisfaction')
@ApiTags('만족도조사 API')
export class SatisfactionController {

  constructor(
    private readonly satisfactionService: SatisfactionService,
  ) {}

  @Get()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '만족도조사 목록 조회 API',
    description: '만족도조사 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<SatisfactionDto>,
    description: '만족도조사 DTO 목록',
  })
  @ApiQuery({
    type: SearchSatisfactionDto,
    name: 'searchSatisfactionDto',
    description: '만족도조사 검색 DTO',
  })
  async listSatisfaction(
    @Query(ValidationPipe) searchSatisfactionDto: SearchSatisfactionDto
  ): Promise<SatisfactionDto[]> {
    const satisfactions: SatisfactionEntity[] = await this.satisfactionService.listSatisfaction(searchSatisfactionDto);

    return serialize<SatisfactionDto[]>(satisfactions);
  }

  @Post()
  @ApiOperation({
    summary: '만족도조사 참여 API',
    description: '만족도조사에 참여한다.',
  })
  @ApiCreatedResponse({
    type: SatisfactionDto,
    description: '만족도조사 DTO',
  })
  @ApiBody({
    type: AddSatisfactionDto,
    description: '만족도조사 참여 DTO',
  })
  async addSatisfaction(
    @Ip() ip: string,
    @Body(ValidationPipe) addSatisfactionDto: AddSatisfactionDto,
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<SatisfactionDto> {
    if (isAuthenticated) {
      throw new BizException('관리자는 참여할 수 없습니다.');
    }

    addSatisfactionDto.ip = ip;

    const satisfaction: SatisfactionEntity = await this.satisfactionService.addSatisfaction(addSatisfactionDto);
    
    return serialize<SatisfactionDto>(satisfaction);
  }

}
