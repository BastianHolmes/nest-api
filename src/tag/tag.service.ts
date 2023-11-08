import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll() {
    return ['tag1', 'tag2', 'tag3'];
  }
}
