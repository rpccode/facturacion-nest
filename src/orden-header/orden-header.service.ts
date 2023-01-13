import { Injectable } from '@nestjs/common';
import { CreateOrdenHeaderDto } from './dto/create-orden-header.dto';
import { UpdateOrdenHeaderDto } from './dto/update-orden-header.dto';

@Injectable()
export class OrdenHeaderService {
  create(createOrdenHeaderDto: CreateOrdenHeaderDto) {
    return 'This action adds a new ordenHeader';
  }

  findAll() {
    return `This action returns all ordenHeader`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordenHeader`;
  }

  update(id: number, updateOrdenHeaderDto: UpdateOrdenHeaderDto) {
    return `This action updates a #${id} ordenHeader`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordenHeader`;
  }
}
