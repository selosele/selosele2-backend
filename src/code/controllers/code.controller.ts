import { Controller, Get, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Code } from '../models';
import { CodeService } from '../services/code.service';

@Controller('code')
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
    type: Array<Code>,
    description: '공통코드 DTO 목록',
  })
  async listCode(): Promise<Code[]> {
    return await this.codeService.listCode();
  }

  @Get(':id')
  @ApiOperation({
    summary: '공통코드 조회 API',
    description: '공통코드를 조회한다.',
  })
  @ApiParam({
    type: String,
    name: 'id',
    description: '코드 ID',
  })
  async getCode(
    @Param('id') id: string
  ): Promise<Code> {
    return await this.codeService.getCode(id);
  }

}
