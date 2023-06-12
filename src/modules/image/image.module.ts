import { Module } from '@nestjs/common';

import { ImageService } from './image.service';
import { ImageEntity } from './model/image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageResolver } from './resolver/image.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([ImageEntity])],
  controllers: [],
  providers: [ImageService, ImageResolver],
})
export class ImageModule {}
