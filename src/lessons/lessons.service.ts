import { Injectable } from '@nestjs/common';
import { CreateLessonResponseDto } from './dto/create-lesson.response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { CreateEvaluationResponseDto } from './dto/create-evaluation.response.dto';
import { GetLessonsResponseDto } from './dto/get-lessons.response.dto';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lesson)
        private readonly lessonsRepository: Repository<Lesson>,
        @InjectRepository(Evaluation)
        private readonly evaluationsRepository: Repository<Evaluation>,
    ) {}

    public async createLesson({ name, code }: { name: string; code: string }): Promise<CreateLessonResponseDto> {
        const lesson = this.lessonsRepository.create({ name, code });

        return this.lessonsRepository.save(lesson);
    }

    public async createEvaluation({
        userId,
        score,
        lessonId,
    }: {
        userId: number;
        score: number;
        lessonId: number;
    }): Promise<CreateEvaluationResponseDto> {
        //TODO evaluation
        return;
    }

    public async getAllLessons(): Promise<GetLessonsResponseDto[]> {
        return this.lessonsRepository.find();
    }
}
