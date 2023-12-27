import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { EApiTags } from 'src/utils/types/api-tags.enum';

export class CreateUserResponseDto {
    @ApiProperty({ description: `user's id`, example: `1` })
    id: string;

    @ApiProperty({ description: `user's name`, example: `Джонни`, minLength: 1, maxLength: 100 })
    name: string;

    @ApiProperty({ description: `user's email`, example: `silverhand@cyber.punk`, minLength: 1, maxLength: 30 })
    email: string;
}
