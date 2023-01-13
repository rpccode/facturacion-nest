import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdenHeaderDto } from './create-orden-header.dto';

export class UpdateOrdenHeaderDto extends PartialType(CreateOrdenHeaderDto) {}
