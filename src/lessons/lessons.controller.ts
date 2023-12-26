import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EApiTags } from 'src/utils/types/api-tags.enum';
import { CreateLessonInputDto } from './dto/create-lesson.input.dto';
import { ERoutes } from 'src/utils/types/routes.enum';
import { CreateLessonResponseDto } from './dto/create-lesson.response.dto';
import { LessonsService } from './lessons.service';
import { CreateEvaluationResponseDto } from './dto/create-evaluation.response.dto';
import { CreateEvaluationInputDto } from './dto/create-evaluation.input.dto';

@Controller(ERoutes.LESSONS)
@ApiTags(EApiTags.LESSONS)
export class LessonsController {
    constructor(private readonly lessonsService: LessonsService) {}

    @Post()
    @ApiOkResponse({ type: CreateLessonResponseDto })
    async createLesson(@Body() dto: CreateLessonInputDto): Promise<CreateLessonResponseDto> {
        return await this.lessonsService.createLesson(dto);
    }

    @Post(':id/evaluations')
    @ApiOkResponse({ type: CreateEvaluationResponseDto })
    async createEvaluation(@Body() dto: CreateEvaluationInputDto, @Param('id') id: number): Promise<CreateEvaluationResponseDto> {
        return await this.lessonsService.createEvaluation({ score: +dto.score, userId: +dto.user_id, lessonId: id });
    }
}
