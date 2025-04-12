import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ObjectId } from 'mongodb';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform<string, ObjectId> {
  transform(value: string): ObjectId {
    if (!ObjectId.isValid(value)) {
      throw new BadRequestException(`Invalid ObjectId format: ${value}`);
    }

    return new ObjectId(value);
  }
}
