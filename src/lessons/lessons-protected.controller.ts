import { Body, Controller, HttpStatus, Param, Post, Get, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EApiTags } from 'src/utils/types/api-tags.enum';
import { CreateLessonInputDto } from './dto/create-lesson.input.dto';
import { ERoutes } from 'src/utils/types/routes.enum';
import { CreateLessonResponseDto } from './dto/create-lesson.response.dto';
import { LessonsService } from './lessons.service';
import { CreateEvaluationResponseDto } from './dto/create-evaluation.response.dto';
import { CreateEvaluationInputDto } from './dto/create-evaluation.input.dto';
import { GetLessonsResponseDto } from './dto/get-lessons.response.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller(ERoutes.LESSONS_PROTECTED)
@ApiTags(EApiTags.LESSONS_PROTECTED)
@UseGuards(AuthGuard)
export class LessonsProtectedController {
    constructor(private readonly lessonsService: LessonsService) {}

    @Post()
    @ApiOkResponse({ type: CreateLessonResponseDto, status: HttpStatus.CREATED })
    async createLessonProtected(@Body() dto: CreateLessonInputDto): Promise<CreateLessonResponseDto> {
        const lesson = await this.lessonsService.createLesson(dto);

        return { id: String(lesson.id), name: lesson.name, code: lesson.code };
    }

    @Post(':id/evaluations')
    @ApiOkResponse({ type: CreateEvaluationResponseDto })
    async createEvaluationProtected(@Body() dto: CreateEvaluationInputDto, @Param('id') id: number): Promise<CreateEvaluationResponseDto> {
        const evaluation = await this.lessonsService.createEvaluation({ score: +dto.score, userId: +dto.user_id, lessonId: id });

        return { id: String(evaluation.id), user_id: String(evaluation.user.id), score: String(evaluation.score) };
    }

    @Get()
    @ApiOkResponse({ type: GetLessonsResponseDto, isArray: true, status: HttpStatus.OK })
    async getAllLessonsProtected(): Promise<GetLessonsResponseDto[]> {
        const lessons = await this.lessonsService.getAllLessons();
        return lessons.map((lesson) => {
            const newEvaluations = lesson.evaluations.map((evaluation) => {
                return { id: String(evaluation.id), score: String(evaluation.score), user: evaluation.user };
            });

            return { ...lesson, id: String(lesson.id), evaluations: newEvaluations };
        });
    }
}
