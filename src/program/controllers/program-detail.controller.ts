import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Roles } from '@/auth/models';
import { Auth } from '@/shared/decorators';
import { serialize } from '@/shared/utils';
import { GetProgramDetailDto, ProgramDetailDto, ProgramDetailEntity, RemoveProgramDetailDto, SaveProgramDetailDto } from '../models';
import { ProgramDetailService } from '../services/program-detail.service';
import { DeleteResult } from 'typeorm';
import { Builder } from 'builder-pattern';

@Controller('programdetail')
@ApiTags('프로그램 상세 API')
export class ProgramDetailController {

  constructor(
    private readonly programDetailService: ProgramDetailService,
  ) {}

  @Get()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '프로그램 상세 목록 조회 API',
    description: '프로그램 상세 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<ProgramDetailDto>,
    description: '프로그램 상세 DTO 목록',
  })
  @ApiQuery({
    type: Number,
    name: 'parentId',
    description: '프로그램 그룹 ID',
  })
  async listProgramDetail(
    @Query('parentId', ParseIntPipe) parentId: number
  ): Promise<ProgramDetailDto[]> {
    const details: ProgramDetailEntity[] = await this.programDetailService.listProgramDetail(parentId);

    return serialize<ProgramDetailDto[]>(details);
  }

  @Get(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '프로그램 상세 조회 API',
    description: '프로그램 상세를 조회한다.',
  })
  @ApiCreatedResponse({
    type: ProgramDetailDto,
    description: '프로그램 상세 DTO',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '프로그램 상세 ID',
  })
  async getProgramDetail(
    @Param('id', ParseIntPipe) id: number
  ): Promise<ProgramDetailDto> {
    const getProgramDetailDto = Builder(GetProgramDetailDto)
                                .id(id)
                                .build();
    const detail: ProgramDetailEntity = await this.programDetailService.getProgramDetail(getProgramDetailDto);

    return serialize<ProgramDetailDto>(detail);
  }

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '프로그램 상세 등록/수정 API',
    description: '프로그램 상세를 등록/수정한다.',
  })
  @ApiCreatedResponse({
    type: ProgramDetailDto,
    description: '프로그램 상세 DTO',
  })
  @ApiBody({
    type: SaveProgramDetailDto,
    description: '프로그램 상세 등록/수정 DTO',
  })
  async saveProgramDetail(
    @Body(ValidationPipe) saveProgramDetailDto: SaveProgramDetailDto
  ): Promise<ProgramDetailDto> {
    const detail: ProgramDetailEntity = await this.programDetailService.saveProgramDetail(saveProgramDetailDto);

    return serialize<ProgramDetailDto>(detail);
  }

  @Post('remove')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '프로그램 상세 다건 삭제 API',
    description: '프로그램 상세를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '프로그램 상세 다건 삭제 정보',
  })
  @ApiBody({
    type: RemoveProgramDetailDto,
    description: '프로그램 상세 삭제 DTO',
  })
  async removeProgramDetails(
    @Body(ValidationPipe) removeProgramDto: RemoveProgramDetailDto[]
  ): Promise<DeleteResult> {
    return await this.programDetailService.removeProgramDetails(removeProgramDto);
  }

}
