import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'permissions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id')
      table.string('slug').notNullable().unique()
      table.string('description').notNullable()
    })
  }

  async down() {
	this.schema.dropTable(this.tableName)
  }
}