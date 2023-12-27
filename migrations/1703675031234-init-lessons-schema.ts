import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitLessonsSchema1703675031234 implements MigrationInterface {
    name = 'InitLessonsSchema1703675031234';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`create schema "lessons"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop schema "lessons"`);
    }
}
