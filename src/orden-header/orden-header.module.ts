import { Module } from '@nestjs/common';
import { OrdenHeaderService } from './orden-header.service';
import { OrdenHeaderController } from './orden-header.controller';

@Module({
  controllers: [OrdenHeaderController],
  providers: [OrdenHeaderService]
})
export class OrdenHeaderModule {}
