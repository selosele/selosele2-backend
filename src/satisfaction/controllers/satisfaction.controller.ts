import { Body, Query, Controller, Post, Get, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { InsertResult } from 'typeorm';
import { AddSatisfactiontDto, SearchSatisfactiontDto, SatisfactionEntity } from '../models';
import { SatisfactionService } from '../services/satisfaction.service';
import { RealIP } from 'nestjs-real-ip';
import { Auth, IsAuthenticated } from 'src/shared/decorators';
import { RoleEnum } from 'src/auth/models';
import { BizException } from 'src/shared/exceptions/biz/biz.exception';

@Controller('satisfaction')
@ApiTags('만족도조사 API')
export class SatisfactionController {

  constructor(
    private readonly satisfactionService: SatisfactionService,
  ) {}

  @Get()
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '만족도조사 목록 조회 API',
    description: '만족도조사 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<SatisfactionEntity>,
    description: '만족도조사 목록',
  })
  @ApiQuery({
    type: SearchSatisfactiontDto,
    name: 'searchSatisfactiontDto',
    description: '만족도조사 검색 DTO',
  })
  listSatisfaction(@Query(ValidationPipe) searchSatisfactiontDto: SearchSatisfactiontDto): Promise<SatisfactionEntity[]> {
    return this.satisfactionService.listSatisfaction(searchSatisfactiontDto);
  }

  @Post()
  @ApiOperation({
    summary: '만족도조사 참여 API',
    description: '만족도조사에 참여한다.',
  })
  @ApiCreatedResponse({
    type: SatisfactionEntity,
    description: '만족도조사',
  })
  @ApiBody({
    type: AddSatisfactiontDto,
    description: '만족도조사 참여 DTO',
  })
  addSatisfaction(
    @Body(ValidationPipe) addSatisfactiontDto: AddSatisfactiontDto,
    @RealIP() ip: string,
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<SatisfactionEntity> {
    if (isAuthenticated) {
      throw new BizException('관리자는 참여할 수 없습니다.');
    }

    addSatisfactiontDto.ip = ip;
    
    return this.satisfactionService.addSatisfaction(addSatisfactiontDto);
  }

}
