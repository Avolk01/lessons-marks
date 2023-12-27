import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { User } from 'src/users/entities/user.entity';
import { EApiTags } from 'src/utils/types/api-tags.enum';

@ApiTags(EApiTags.LESSONS)
export class GetEvaluationResponseDto {
    @ApiProperty({ description: `evaluation's id`, example: 1 })
    id: string;

    @ApiProperty({ description: `evaluation's score`, example: `Музыка` })
    score: string;

    @ApiProperty({ description: `evaluation's user`, example: `music` })
    user: User;
}
