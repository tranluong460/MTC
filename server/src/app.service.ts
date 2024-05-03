import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  base(): string {
    return 'Welcome!';
  }
}
