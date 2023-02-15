import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  prisma: PrismaService;
  constructor(prisma: PrismaService) {
    this.prisma = prisma;
  }
  signin() {
    return { msg: 'Hello' };
  }
  signup() {
    return 'I am signed up';
  }
}
