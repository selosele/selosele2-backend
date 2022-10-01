import { Controller, Get, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Code } from './code.entity';
import { CodeService } from './code.service';

@Controller('api/v1/code')
@ApiTags('공통코드 API')
export class CodeController {
  constructor(private readonly codeService: CodeService) {}

  @Get('list/:prefix')
  @ApiOperation({
    summary: '코드 접두사와 매칭되는 공통코드 목록 조회 API',
    description: '코드 접두사와 매칭되는 공통코드 목록을 조회한다.'
  })
  @ApiCreatedResponse({
    description: '코드 접두사와 매칭되는 공통코드 목록을 조회한다.',
    type: Code
  })
  listByPrefix(@Param('prefix') prefix: string): Promise<Code[]> {
    return this.codeService.find(prefix);
  }

}