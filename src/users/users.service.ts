import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { GetUsersResponseDto } from './dto/get-users.response.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    public async getAllUsers(): Promise<User[]> {
        return this.usersRepository.find();
    }

    public async createUser({ name, email }: { name: string; email: string }): Promise<User> {
        const user = this.usersRepository.create({ name, email });

        return this.usersRepository.save(user);
    }
}
