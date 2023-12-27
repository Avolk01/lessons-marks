import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { CreateEvaluationResponseDto } from './dto/create-evaluation.response.dto';
import { GetLessonsResponseDto } from './dto/get-lessons.response.dto';
import { EvaluationsService } from 'src/evaluations/evaluations.service';
import { LessonNotFoundException } from 'src/utils/exceptions/lesson-not-found.exception';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lesson)
        private readonly lessonsRepository: Repository<Lesson>,
        private readonly evaluationsService: EvaluationsService,
    ) {}

    public async createLesson({ name, code }: { name: string; code: string }): Promise<Lesson> {
        const lesson = this.lessonsRepository.create({ name, code, evaluations: [] });

        return this.lessonsRepository.save(lesson);
    }

    public async createEvaluation({ userId, score, lessonId }: { userId: number; score: number; lessonId: number }): Promise<Evaluation> {
        const lesson = await this.lessonsRepository.findOne({ where: { id: lessonId } });

        if (!lesson) {
            throw new LessonNotFoundException();
        }

        return this.evaluationsService.createEvaluation({ userId, score, lesson });
    }

    public async getAllLessons(): Promise<Lesson[]> {
        return this.lessonsRepository.find();
    }
}
