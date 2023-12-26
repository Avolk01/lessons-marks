import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from 'class-validator';
import { EApiTags } from 'src/utils/types/api-tags.enum';

@ApiTags(EApiTags.LESSONS)
export class CreateUserInputDto {
    @ApiProperty({ description: `user's name`, example: `Джонни`, minLength: 1, maxLength: 100 })
    @IsNotEmpty()
    @IsString()
    @Length(1, 100)
    name: string;

    @ApiProperty({ description: `user's email`, example: `silverhand@cyber.punk`, minLength: 1, maxLength: 30 })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @Length(1, 30)
    email: string;
}
