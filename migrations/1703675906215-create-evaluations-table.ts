import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEvaluationsTable1703675906215 implements MigrationInterface {
    name = 'CreateEvaluationsTable1703675906215';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "lessons"."evaluation"
            (
                "id"         SERIAL    NOT NULL,
                "score"      integer   NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "user_id"    integer,
                "lesson_id"   integer,
                CONSTRAINT "PK_b72edd439b9db736f55b584fa54" PRIMARY KEY ("id")
            )
        `);

        await queryRunner.query(
            `ALTER TABLE "lessons"."evaluation" ADD CONSTRAINT "FK_764ed32806129494bb330866071" FOREIGN KEY ("user_id") REFERENCES "lessons"."user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
        );

        await queryRunner.query(
            `ALTER TABLE "lessons"."evaluation" ADD CONSTRAINT "FK_64b81dcfafbceacb289b5182490" FOREIGN KEY ("lesson_id") REFERENCES "lessons"."lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE ""lessons".evaluation" DROP CONSTRAINT "FK_64b81dcfafbceacb289b5182490"`);
        await queryRunner.query(`ALTER TABLE ""lessons".evaluation" DROP CONSTRAINT "FK_764ed32806129494bb330866071"`);
        await queryRunner.query(`DROP TABLE ""lessons".evaluation"`);
    }
}
