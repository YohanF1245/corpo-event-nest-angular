import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.pass)) {
      const { pass, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.mail, sub: user.user_id, role: user.role.role_name };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.user_id,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role.role_name,
      },
    };
  }
} 