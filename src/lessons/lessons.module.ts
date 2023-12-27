import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { EvaluationsService } from 'src/evaluations/evaluations.service';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Lesson, Evaluation, User])],
    controllers: [LessonsController],
    providers: [LessonsService, EvaluationsService],
})
export class LessonsModule {}
