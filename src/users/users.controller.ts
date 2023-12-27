import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ERoutes } from 'src/utils/types/routes.enum';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EApiTags } from 'src/utils/types/api-tags.enum';
import { GetUsersResponseDto } from './dto/get-users.response.dto';
import { CreateUserResponseDto } from './dto/create-user.response.dto';
import { CreateUserInputDto } from './dto/create-user.input.dto';

@ApiTags(EApiTags.USERS)
@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiOkResponse({ type: GetUsersResponseDto, isArray: true, status: HttpStatus.OK })
    @Get(ERoutes.GET_USERS)
    async getAllUsers(): Promise<GetUsersResponseDto[]> {
        const users = await this.usersService.getAllUsers();

        return users.map((user) => {
            return { ...user, id: String(user.id) };
        });
    }

    @ApiOkResponse({ type: CreateUserResponseDto, status: HttpStatus.CREATED })
    @Post(ERoutes.CREATE_USER)
    async createUser(@Body() dto: CreateUserInputDto): Promise<CreateUserResponseDto> {
        const user = await this.usersService.createUser(dto);

        return { ...user, id: String(user.id) };
    }
}
