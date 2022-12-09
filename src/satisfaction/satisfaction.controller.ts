import { Body, Query, Controller, Post, Get, ValidationPipe, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { InsertResult } from 'typeorm';
import { AddSatisfactiontDto } from './dto/add-satisfaction.dto';
import { SatisfactionEntity } from './satisfaction.entity';
import { SatisfactionService } from './satisfaction.service';
import { RealIP } from 'nestjs-real-ip';
import { IsAuthenticated } from 'src/shared/decorator/auth/is-authenticated.decorator';
import { Roles } from 'src/shared/decorator/auth/roles.decorator';
import { JwtAuthGuard } from 'src/shared/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guard/role.guard';
import { RoleEnum } from 'src/auth/role.entity';
import { SearchSatisfactiontDto } from './dto/search-satisfaction.dto';
import { BizException } from 'src/shared/exception/biz.exception';

@Controller('api/satisfaction')
@ApiTags('만족도조사 API')
export class SatisfactionController {

  constructor(
    private readonly satisfactionService: SatisfactionService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '만족도조사 목록 조회 API',
    description: '만족도조사 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: SatisfactionEntity,
    description: '만족도조사 목록을 조회한다.',
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
    type: InsertResult,
    description: '만족도조사에 참여한다.',
  })
  @ApiBody({
    type: AddSatisfactiontDto,
    description: '만족도조사 참여 DTO',
  })
  addSatisfaction(
    @Body(ValidationPipe) addSatisfactiontDto: AddSatisfactiontDto,
    @RealIP() ip: string,
    @IsAuthenticated() isAuthenticated: boolean
  ): Promise<InsertResult> {
    if (isAuthenticated) {
      throw new BizException('관리자는 참여할 수 없습니다.');
    }
    addSatisfactiontDto.ip = ip;
    return this.satisfactionService.addSatisfaction(addSatisfactiontDto);
  }

}
