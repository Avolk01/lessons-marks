import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Evaluation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    //TODO one to one
}
