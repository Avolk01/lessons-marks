import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Max } from 'class-validator';
import { EApiTags } from 'src/utils/types/api-tags.enum';

@ApiTags(EApiTags.LESSONS)
export class CreateLessonResponseDto {
    @ApiProperty({ description: `lesson's id`, example: 1 })
    id: number;

    @ApiProperty({ description: `lesson's name`, example: `Музыка`, minLength: 1, maxLength: 100 })
    name: string;

    @ApiProperty({ description: `lesson's id`, example: `music`, minLength: 1, maxLength: 20 })
    code: string;
}
