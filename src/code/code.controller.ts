import { Controller, Delete, Get, Body, Param, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { Code } from './code.entity';
import { CodeService } from './code.service';
import { RemoveCodetDto } from './dto/remove-code.dto';

@Controller('api/code')
@ApiTags('공통코드 API')
export class CodeController {
  
  constructor(
    private readonly codeService: CodeService,
  ) {}

  @Get('list/:prefix')
  @ApiOperation({
    summary: '코드 접두어와 매칭되는 공통코드 목록 조회 API',
    description: '코드 접두어와 매칭되는 공통코드 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Code,
    description: '코드 접두어와 매칭되는 공통코드 목록을 조회한다.',
  })
  @ApiParam({
    type: String,
    name: 'prefix',
    description: '코드 접두어',
  })
  listCodeByPrefix(@Param('prefix') prefix: string): Promise<Code[]> {
    return this.codeService.listCodeByPrefix(prefix);
  }

  @Get('list')
  @ApiOperation({
    summary: '공통코드 목록 조회 API',
    description: '공통코드 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    type: Code,
    description: '공통코드 목록을 조회한다.',
  })
  listCode(): Promise<Code[]> {
    return this.codeService.listCode();
  }

  @Delete('remove')
  @ApiOperation({
    summary: '공통코드 삭제 API',
    description: '공통코드를 삭제한다.'
  })
  @ApiCreatedResponse({
    type: DeleteResult,
    description: '공통코드를 삭제한다.',
  })
  @ApiBody({
    type: RemoveCodetDto,
    description: '공통코드 삭제 DTO',
  })
  removeCode(@Body(ValidationPipe) removeCodetDto: RemoveCodetDto[]): Promise<DeleteResult> {
    return this.codeService.removeCode(removeCodetDto);
  }

}
