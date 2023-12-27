import { HttpException, HttpStatus } from '@nestjs/common';

export class LessonNotFoundException extends HttpException {
    constructor() {
        super('Lesson not found!', HttpStatus.BAD_REQUEST);
    }
}
