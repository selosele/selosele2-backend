import { Body, Query, Controller, Post, Get, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AddSatisfactiontDto, SearchSatisfactiontDto, SatisfactionEntity, SatisfactionDto } from '../models';
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
    type: SearchSatisfactiontDto,
    name: 'searchSatisfactiontDto',
    description: '만족도조사 검색 DTO',
  })
  async listSatisfaction(
    @Query(ValidationPipe) searchSatisfactiontDto: SearchSatisfactiontDto
  ): Promise<SatisfactionDto[]> {
    const Satisfactions: SatisfactionEntity[] = await this.satisfactionService.listSatisfaction(searchSatisfactiontDto);

    return serialize<SatisfactionDto[]>(Satisfactions);
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
    type: AddSatisfactiontDto,
    description: '만족도조사 참여 DTO',
  })
  async addSatisfaction(
    @Ip() ip: string,
    @Body(ValidationPipe) addSatisfactiontDto: AddSatisfactiontDto,
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<SatisfactionDto> {
    if (isAuthenticated) {
      throw new BizException('관리자는 참여할 수 없습니다.');
    }

    addSatisfactiontDto.ip = ip;

    const Satisfaction: SatisfactionEntity = await this.satisfactionService.addSatisfaction(addSatisfactiontDto);
    
    return serialize<SatisfactionDto>(Satisfaction);
  }

}
