import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { EApiTags } from 'src/utils/types/api-tags.enum';

@ApiTags(EApiTags.LESSONS)
export class GetLessonsResponseDto {
    @ApiProperty({ description: `lesson's id`, example: 1 })
    id: number;

    @ApiProperty({ description: `lesson's name`, example: `Музыка` })
    name: string;

    @ApiProperty({ description: `lesson's code`, example: `music` })
    code: string;
}
