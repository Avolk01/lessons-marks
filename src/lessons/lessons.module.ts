import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { EvaluationsService } from 'src/evaluations/evaluations.service';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { User } from 'src/users/entities/user.entity';
import { TokenService } from 'src/auth/services/token.service';
import { Auth } from 'src/auth/entities/auth.entity';
import { LessonsProtectedController } from './lessons-protected.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Lesson, Evaluation, User, Auth])],
    controllers: [LessonsController, LessonsProtectedController],
    providers: [LessonsService, EvaluationsService, TokenService],
})
export class LessonsModule {}
