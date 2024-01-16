import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Roles } from '@/auth/models';
import { Auth } from '@/shared/decorators';
import { serialize } from '@/shared/utils';
import { ProgramService } from '../services/program.service';
import { ProgramDto, ProgramEntity, RemoveProgramDto, SaveProgramDto } from '../models';
import { DeleteResult } from 'typeorm';

@Controller('program')
@ApiTags('프로그램 그룹 API')
export class ProgramController {

  constructor(
    private readonly ProgramService: ProgramService,
  ) {}

  @Get()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '프로그램 그룹 목록 조회 API',
    description: '프로그램 그룹 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<ProgramDto>,
    description: '프로그램 그룹 DTO 목록',
  })
  async listProgram(): Promise<ProgramDto[]> {
    const programs: ProgramEntity[] = await this.ProgramService.listProgram();

    return serialize<ProgramDto[]>(programs);
  }

  @Get(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '프로그램 그룹 조회 API',
    description: '프로그램 그룹을 조회한다.',
  })
  @ApiCreatedResponse({
    type: ProgramDto,
    description: '프로그램 그룹 DTO',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '프로그램 그룹 ID',
  })
  async getProgram(
    @Param('id', ParseIntPipe) id: number
  ): Promise<ProgramDto> {
    const program: ProgramEntity = await this.ProgramService.getProgram(id);

    return serialize<ProgramDto>(program);
  }

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '프로그램 그룹 등록/수정 API',
    description: '프로그램 그룹을 등록/수정한다.',
  })
  @ApiCreatedResponse({
    type: ProgramDto,
    description: '프로그램 그룹 DTO',
  })
  @ApiBody({
    type: SaveProgramDto,
    description: '프로그램 그룹 등록/수정 DTO',
  })
  async saveProgram(
    @Body(ValidationPipe) saveProgramDto: SaveProgramDto
  ): Promise<ProgramDto> {
    const program: ProgramEntity = await this.ProgramService.saveProgram(saveProgramDto);

    return serialize<ProgramEntity>(program);
  }

  @Delete(':id')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '프로그램 그룹 삭제 API',
    description: '프로그램 그룹을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '프로그램 그룹 삭제 정보',
  })
  @ApiParam({
    type: Number,
    name: 'id',
    description: '프로그램 그룹 ID',
  })
  async removeProgram(
    @Param('id', ParseIntPipe) id: number
  ): Promise<DeleteResult> {
    return await this.ProgramService.removeProgram(id);
  }

  @Post('remove')
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '프로그램 그룹 다건 삭제 API',
    description: '프로그램 그룹 다건을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '프로그램 그룹 다건 삭제 정보',
  })
  @ApiBody({
    type: RemoveProgramDto,
    description: '프로그램 그룹 삭제 DTO',
  })
  async removePrograms(
    @Body(ValidationPipe) removeProgramDto: RemoveProgramDto[]
  ): Promise<DeleteResult> {
    return await this.ProgramService.removePrograms(removeProgramDto);
  }

}
