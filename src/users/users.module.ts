import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Auth } from 'src/auth/entities/auth.entity';
import { TokenService } from 'src/auth/services/token.service';
import { UsersProtectedController } from './users-protected.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User, Auth])],
    providers: [UsersService, TokenService],
    controllers: [UsersController, UsersProtectedController],
})
export class UsersModule {}
