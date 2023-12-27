import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAuthTable1703675044933 implements MigrationInterface {
    name = 'CreateAuthTable1703675044933';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "lessons"."auth"
            (
                "id"       uuid              NOT NULL DEFAULT uuid_generate_v4(),
                "name"     character varying NOT NULL,
                "email"    character varying NOT NULL,
                "password" character varying NOT NULL,
                CONSTRAINT "PK_7e416cf6172bc5aec04244f6459" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "auth"`);
    }
}
