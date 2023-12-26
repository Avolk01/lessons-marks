import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString, Length, Max } from 'class-validator';
import { EApiTags } from 'src/utils/types/api-tags.enum';

@ApiTags(EApiTags.LESSONS)
export class CreateEvaluationInputDto {
    @ApiProperty({ description: `evaluation's user id`, example: `1` })
    @IsNotEmpty()
    @IsNumberString()
    user_id: string;

    @ApiProperty({ description: `evaluation's score`, example: `56` })
    @IsNotEmpty()
    @IsNumberString()
    score: string;
}
