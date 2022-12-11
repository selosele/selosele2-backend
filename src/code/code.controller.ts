import { Controller, Delete, Get, Body, Param, ValidationPipe, Put, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { RoleEnum } from 'src/auth/role.entity';
import { Roles } from 'src/shared/decorator/auth/roles.decorator';
import { JwtAuthGuard } from 'src/shared/guard/jwt-auth.guard';
import { RoleGuard } from 'src/shared/guard/role.guard';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { CodeEntity } from './code.entity';
import { CodeService } from './code.service';
import { RemoveCodeDto } from './dto/remove-code.dto';
import { SaveCodetDto } from './dto/save-code.dto';

@Controller('api/code')
@ApiTags('공통코드 API')
export class CodeController {
  
  constructor(
    private readonly codeService: CodeService,
  ) {}

  @Get()
  @ApiOperation({
    summary: '공통코드 목록 조회 API',
    description: '공통코드 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: CodeEntity,
    description: '공통코드 목록을 조회한다.',
  })
  listCode(): Promise<CodeEntity[]> {
    return this.codeService.listCode();
  }

  @Get('prefix/:prefix')
  @ApiOperation({
    summary: '코드 접두어와 매칭되는 공통코드 목록 조회 API',
    description: '코드 접두어와 매칭되는 공통코드 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: CodeEntity,
    description: '코드 접두어와 매칭되는 공통코드 목록을 조회한다.',
  })
  @ApiParam({
    type: String,
    name: 'prefix',
    description: '코드 접두어',
  })
  listCodeByPrefix(@Param('prefix') prefix: string): Promise<CodeEntity[]> {
    return this.codeService.listCode(prefix);
  }

  @Get(':id')
  @ApiOperation({
    summary: '공통코드 조회 API',
    description: '공통코드를 조회한다.',
  })
  @ApiCreatedResponse({
    type: CodeEntity,
    description: '공통코드를 조회한다.',
  })
  @ApiParam({
    type: String,
    name: 'id',
    description: '코드 ID',
  })
  getCode(@Param('id') id: string): Promise<CodeEntity> {
    return this.codeService.getCode(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '공통코드 추가 API',
    description: '공통코드를 추가한다.'
  })
  @ApiCreatedResponse({
    type: InsertResult,
    description: '공통코드를 추가한다.',
  })
  @ApiBody({
    type: SaveCodetDto,
    description: '공통코드 추가/수정 DTO',
  })
  addCode(@Body(ValidationPipe) saveCodetDto: SaveCodetDto): Promise<InsertResult | UpdateResult> {
    return this.codeService.saveCode(saveCodetDto);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '공통코드 수정 API',
    description: '공통코드를 수정한다.'
  })
  @ApiCreatedResponse({
    type: UpdateResult,
    description: '공통코드를 수정한다.',
  })
  @ApiBody({
    type: SaveCodetDto,
    description: '공통코드 추가/수정 DTO',
  })
  updateCode(@Body(ValidationPipe) saveCodetDto: SaveCodetDto): Promise<InsertResult | UpdateResult> {
    return this.codeService.saveCode(saveCodetDto);
  }

  @Delete()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '공통코드 다건 삭제 API',
    description: '공통코드 다건을 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '공통코드 다건을 삭제한다.',
  })
  @ApiBody({
    type: RemoveCodeDto,
    description: '공통코드 삭제 DTO',
  })
  removeCodes(@Body(ValidationPipe) removeCodeDto: RemoveCodeDto[]): Promise<DeleteResult> {
    return this.codeService.removeCodes(removeCodeDto);
  }

}
