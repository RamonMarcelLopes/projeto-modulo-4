import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running!!! 🚀 \n please check http://localhost:3333/api for swagger docs';
  }
}
