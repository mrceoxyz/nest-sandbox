import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: LoginDto) {
    const user = await this.usersService.findOne(username, true);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return null;
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    delete user.password;
    return user;
  }

  login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
