import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { EApiTags } from 'src/utils/types/api-tags.enum';

@ApiTags(EApiTags.LESSONS)
export class CreateEvaluationResponseDto {
    @ApiProperty({ description: `lesson's id`, example: 1 })
    id: number;

    @ApiProperty({ description: `evaluation's user id`, example: `1` })
    user_id: string;

    @ApiProperty({ description: `evaluation's score`, example: `56` })
    score: string;
}
