/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { FindUsersDto } from './dto/find-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const { username, password, email } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = this.userRepository.create({
      username,
      password: hashedPassword,
      email,
    });

    const newUser = await this.userRepository.save(user);
    return newUser;
  }

  async findAll(findUsersDto: FindUsersDto) {
    return this.userRepository.createQueryBuilder('user').getMany();
  }

  async findOne(
    username: string,
    selectSecrets: boolean = false,
  ): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { username },
      select: {
        id: true,
        username: true,
        email: true,
        accountStatus: true,
        password: selectSecrets,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
