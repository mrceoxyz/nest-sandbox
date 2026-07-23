import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { FindUsersDto } from './dto/find-users.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { User } from './entities/user.entity';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findMany(@Query() query: FindUsersDto) {
    return this.usersService.findAll(query);
  }

  @Get('profile')
  getProfile(@CurrentUser() user: User) {
    return user;
  }

  @Get(':username')
  @UseGuards(LocalAuthGuard)
  findOne(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }
}
