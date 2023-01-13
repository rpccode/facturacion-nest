import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrdenHeaderService } from './orden-header.service';
import { CreateOrdenHeaderDto } from './dto/create-orden-header.dto';
import { UpdateOrdenHeaderDto } from './dto/update-orden-header.dto';

@Controller('orden-header')
export class OrdenHeaderController {
  constructor(private readonly ordenHeaderService: OrdenHeaderService) {}

  @Post()
  create(@Body() createOrdenHeaderDto: CreateOrdenHeaderDto) {
    return this.ordenHeaderService.create(createOrdenHeaderDto);
  }

  @Get()
  findAll() {
    return this.ordenHeaderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenHeaderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenHeaderDto: UpdateOrdenHeaderDto) {
    return this.ordenHeaderService.update(+id, updateOrdenHeaderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenHeaderService.remove(+id);
  }
}
