import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Lesson, Evaluation])],
    controllers: [LessonsController],
    providers: [LessonsService],
})
export class LessonsModule {}
