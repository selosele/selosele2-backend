import { Body, Controller, ForbiddenException, Post, Get, ValidationPipe, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { InsertResult } from 'typeorm';
import { AddSatisfactiontDto } from './dto/add-satisfaction.dto';
import { Satisfaction } from './satisfaction.entity';
import { SatisfactionService } from './satisfaction.service';
import { RealIP } from 'nestjs-real-ip';
import { isAuthenticated } from 'src/shared/decorator/auth/is-authenticated.decorator';
import { Roles } from 'src/shared/decorator/auth/roles.decorator';
import { JwtAuthGuard } from 'src/shared/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guard/role.guard';
import { RoleEnum } from 'src/auth/role.entity';

@Controller('api/satisfaction')
@ApiTags('만족도조사 API')
export class SatisfactionController {

  constructor(
    private readonly satisfactionService: SatisfactionService,
  ) {}

  @Post()
  @ApiOperation({
    summary: '만족도조사 참여 API',
    description: '만족도조사에 참여한다.',
  })
  @ApiCreatedResponse({
    type: Satisfaction,
    description: '만족도조사에 참여한다.',
  })
  @ApiBody({
    type: AddSatisfactiontDto,
    description: '만족도조사 참여 DTO',
  })
  addSatisfaction(
    @Body(ValidationPipe) addSatisfactiontDto: AddSatisfactiontDto,
    @RealIP() ip: string,
    @isAuthenticated() isAuthenticated: boolean
  ): Promise<InsertResult> {
    if (isAuthenticated) {
      throw new ForbiddenException('관리자는 참여할 수 없습니다.');
    }
    addSatisfactiontDto.ip = ip;
    return this.satisfactionService.addSatisfaction(addSatisfactiontDto);
  }

  @Get('list')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '만족도조사 목록 조회 API',
    description: '만족도조사 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Satisfaction,
    description: '만족도조사 목록을 조회한다.',
  })
  listSatisfaction(): Promise<Satisfaction[]> {
    return this.satisfactionService.listSatisfaction();
  }

}
