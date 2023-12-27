import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1703675637693 implements MigrationInterface {
    name = 'CreateUsersTable1703675637693';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "lessons"."user"
            (
                "id"    SERIAL                 NOT NULL,
                "name"  character varying(100) NOT NULL,
                "email" character varying(30)  NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
