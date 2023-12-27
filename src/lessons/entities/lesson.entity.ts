import { Evaluation } from 'src/evaluations/entities/evaluation.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'auth' })
export class Lesson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 20, unique: true })
    code: string;

    @OneToMany(() => Evaluation, (evaluation) => evaluation.lesson, { eager: true, onDelete: 'CASCADE' })
    evaluations: Evaluation[];
}
