import { ConfigService } from '@nestjs/config';
import { ConfigOptions, v2 } from 'cloudinary';

const CLOUDINARY_PROVIDER_TOKEN = 'Cloudinary';

export const FileUploaderProvider = {
  provide: CLOUDINARY_PROVIDER_TOKEN,
  useFactory: (env: ConfigService): ConfigOptions => {
    return v2.config({
      cloud_name: env.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: env.get<string>('CLOUDINARY_API_KEY'),
      api_secret: env.get<string>('CLOUDINARY_API_SECRET'),
    });
  },
  inject: [ConfigService],
};
