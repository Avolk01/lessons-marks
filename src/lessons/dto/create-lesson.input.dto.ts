import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Max } from 'class-validator';
import { EApiTags } from 'src/utils/types/api-tags.enum';

@ApiTags(EApiTags.LESSONS)
export class CreateLessonInputDto {
    @ApiProperty({ description: `lesson's name`, example: `Музыка` })
    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    name: string;

    @ApiProperty({ description: `lesson's code`, example: `music` })
    @IsNotEmpty()
    @IsString()
    @Length(1, 20)
    code: string;
}
