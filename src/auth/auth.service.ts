import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'Hello' };
  }
  signup() {
    return 'I am signed up';
  }
}
