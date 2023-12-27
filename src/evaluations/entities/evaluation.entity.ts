import { Lesson } from 'src/lessons/entities/lesson.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ schema: 'auth' })
export class Evaluation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Lesson, (lesson) => lesson.evaluations)
    @JoinColumn({ name: 'lesson_id' })
    lesson: Lesson;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}
