import { Module } from '@nestjs/common';
import { EvaluationsService } from './evaluations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evaluation } from './entities/evaluation.entity';
import { User } from 'src/users/entities/user.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Evaluation, User, Lesson])],
    providers: [EvaluationsService],
    exports: [EvaluationsService],
})
export class EvaluationsModule {}
