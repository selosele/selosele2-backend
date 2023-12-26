import { ConfigService } from '@nestjs/config';
import { ConfigOptions, v2 } from 'cloudinary';

const CLOUDINARY_PROVIDER_TOKEN = 'Cloudinary';

export const FileUploaderProvider = {
  provide: CLOUDINARY_PROVIDER_TOKEN,
  useFactory: (config: ConfigService): ConfigOptions => {
    return v2.config({
      cloud_name: config.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: config.get<string>('CLOUDINARY_API_KEY'),
      api_secret: config.get<string>('CLOUDINARY_API_SECRET'),
    });
  },
  inject: [ConfigService],
};
