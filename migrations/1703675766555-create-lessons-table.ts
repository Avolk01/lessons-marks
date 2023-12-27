import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLessonsTable1703675766555 implements MigrationInterface {
    name = 'CreateLessonsTable1703675766555';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "lessons"."lesson"
            (
                "id"   SERIAL                 NOT NULL,
                "name" character varying(100) NOT NULL,
                "code" character varying(20)  NOT NULL,
                CONSTRAINT "UQ_0622d5d889bcbc142a90be1dfca" UNIQUE ("code"),
                CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "lesson"`);
    }
}
