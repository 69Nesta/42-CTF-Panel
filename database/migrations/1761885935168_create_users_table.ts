import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
    protected tableName = 'users'

    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').notNullable().unique()
			table.integer('intra_id').notNullable().unique()
			table.string('login', 30).notNullable().unique()
            table.string('email', 254).notNullable().unique()

			table.string('first_name', 30).notNullable()
			table.string('last_name', 30).notNullable()
			table.string('full_name', 61).notNullable()

			table.string('avatar').notNullable()

			table.string('pool_year', 4).notNullable()
			table.string('pool_month', 10).notNullable()

            table.timestamp('created_at').notNullable()
            table.timestamp('updated_at').nullable()
        })
    }

    async down() {
        this.schema.dropTable(this.tableName)
    }
}
