import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { EApiTags } from 'src/utils/types/api-tags.enum';
import { GetEvaluationResponseDto } from './get-evaluation.response.dto';

@ApiTags(EApiTags.LESSONS)
export class GetLessonsResponseDto {
    @ApiProperty({ description: `lesson's id`, example: `1` })
    id: string;

    @ApiProperty({ description: `lesson's name`, example: `Музыка` })
    name: string;

    @ApiProperty({ description: `lesson's code`, example: `music` })
    code: string;

    @ApiProperty({
        description: `lesson's evaluations`,
        example: [
            {
                id: '3',
                score: '56',
                user: {
                    id: '1',
                    name: 'Джонни',
                    email: 'silverhand@cyber.punk',
                },
            },
        ],
    })
    evaluations: GetEvaluationResponseDto[];
}
