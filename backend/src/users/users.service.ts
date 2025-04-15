import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return [
      { name: 'John' },
      { name: 'Doe' },
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'Charlie' },
    ];
  }
}
