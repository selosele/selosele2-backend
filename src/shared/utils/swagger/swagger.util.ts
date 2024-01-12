import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/** Swagger를 설정한다. */
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
                      .setTitle('selosele2 API 문서')
                      .setDescription('selosele2 API에 대한 상세정보를 조회할 수 있다.')
                      .setVersion('1.0.0')
                      .build();
  const document = SwaggerModule.createDocument(app, options);
  
  SwaggerModule.setup('api-docs', app, document);
}
