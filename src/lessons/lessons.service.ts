import { Injectable } from '@nestjs/common';
import { CreateLessonResponseDto } from './dto/create-lesson.response.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './entities/lesson.entity';
import { Repository } from 'typeorm';
import { CreateEvaluationResponseDto } from './dto/create-evaluation.response.dto';

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lesson)
        private readonly lessonsRepository: Repository<Lesson>,
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
        //TODO: evaluation module
        return;
    }
}
