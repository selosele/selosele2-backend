import { Body, Controller, Get, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RoleEnum } from 'src/auth/models';
import { Auth } from 'src/shared/decorators';
import { UpdateResult } from 'typeorm';
import { AddNotificationDto, ListNotificationDto, NotificationEntity } from '../models';
import { NotificationService } from '../services/notification.service';

@Controller('notification')
@ApiTags('알림 API')
export class NotificationController {

  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Get()
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '알림 목록 조회 API',
    description: '알림 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<NotificationEntity>,
    description: '알림 목록',
  })
  @ApiQuery({
    type: ListNotificationDto,
    name: 'listNotificationDto',
    description: '알림 목록 조회 DTO',
  })
  listNotification(@Query(ValidationPipe) listNotificationDto: ListNotificationDto): Promise<[NotificationEntity[], number]> {
    return this.notificationService.listNotification(listNotificationDto);
  }

  @Post()
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '알림 추가 API',
    description: '알림을 추가한다.',
  })
  @ApiCreatedResponse({
    type: NotificationEntity,
    description: '알림',
  })
  @ApiBody({
    type: AddNotificationDto,
    description: '알림 추가 DTO',
  })
  addNotification(@Body(ValidationPipe) addNotificationDto: AddNotificationDto): Promise<NotificationEntity> {
    return this.notificationService.addNotification(addNotificationDto);
  }

  @Put()
  @Auth(RoleEnum.ROLE_ADMIN)
  @ApiOperation({
    summary: '알림 확인 API',
    description: '알림을 확인 처리한다.',
  })
  @ApiCreatedResponse({
    type: UpdateResult,
    description: '알림 수정 정보',
  })
  @ApiBody({
    type: Array<Number>,
    description: '알림 ID 목록',
  })
  updateNotificationCheckYn(@Body() idList: number[]): Promise<UpdateResult> {
    return this.notificationService.updateNotificationCheckYn(idList);
  }

}
