import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Evaluation } from './entities/evaluation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UserNotFoundException } from 'src/utils/exceptions/user-not-found.exception';
import { Lesson } from 'src/lessons/entities/lesson.entity';

@Injectable()
export class EvaluationsService {
    constructor(
        @InjectRepository(Evaluation) private readonly evaluationsRepository: Repository<Evaluation>,
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
    ) {}

    public async createEvaluation({ userId, score, lesson }: { userId: number; score: number; lesson: Lesson }): Promise<Evaluation> {
        const user = await this.usersRepository.findOne({ where: { id: userId } });

        if (!user) {
            throw new UserNotFoundException();
        }

        const evaluation = this.evaluationsRepository.create({ user, score, lesson });

        return this.evaluationsRepository.save(evaluation);
    }
}
