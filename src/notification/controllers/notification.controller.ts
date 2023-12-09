import { Body, Controller, Get, Post, Put, Query, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Roles } from '@/auth/models';
import { Auth } from '@/shared/decorators';
import { UpdateResult } from 'typeorm';
import { AddNotificationDto, ListNotificationDto, NotificationDto, NotificationEntity } from '../models';
import { NotificationService } from '../services/notification.service';
import { serialize } from '@/shared/utils';

@Controller('notification')
@ApiTags('알림 API')
export class NotificationController {

  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Get()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '알림 목록 조회 API',
    description: '알림 목록을 조회한다.',
  })
  @ApiCreatedResponse({
    type: Array<NotificationDto>,
    description: '알림 DTO 목록',
  })
  @ApiQuery({
    type: ListNotificationDto,
    name: 'listNotificationDto',
    description: '알림 목록 조회 DTO',
  })
  async listNotification(
    @Query(ValidationPipe) listNotificationDto: ListNotificationDto
  ): Promise<[NotificationDto[], number]> {
    const notifications: [NotificationEntity[], number] = await this.notificationService.listNotification(listNotificationDto);

    return [
      serialize<NotificationDto[]>(notifications[0]),
      notifications[1],
    ];
  }

  @Post()
  @Auth(Roles.ROLE_ADMIN)
  @ApiOperation({
    summary: '알림 등록 API',
    description: '알림을 등록한다.',
  })
  @ApiCreatedResponse({
    type: NotificationDto,
    description: '알림 DTO',
  })
  @ApiBody({
    type: AddNotificationDto,
    description: '알림 등록 DTO',
  })
  async addNotification(
    @Body(ValidationPipe) addNotificationDto: AddNotificationDto
  ): Promise<NotificationDto> {
    const notification: NotificationEntity = await this.notificationService.addNotification(addNotificationDto);

    return serialize<NotificationDto>(notification);
  }

  @Put()
  @Auth(Roles.ROLE_ADMIN)
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
  async updateNotificationCheckYn(
    @Body() idList: number[]
  ): Promise<UpdateResult> {
    return await this.notificationService.updateNotificationCheckYn(idList);
  }

}
