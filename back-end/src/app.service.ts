import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUnauthorized(): string {
    return 'Não Autorizado!'
  }
  getHello(): string { 
    return 'REST Fullstack Challenge 20201209 Running';
  }
}
