import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { EApiTags } from 'src/utils/types/api-tags.enum';

export class CreateEvaluationResponseDto {
    @ApiProperty({ description: `evaluation's id`, example: `1` })
    id: string;

    @ApiProperty({ description: `evaluation's user id`, example: `1` })
    user_id: string;

    @ApiProperty({ description: `evaluation's score`, example: `56` })
    score: string;
}
