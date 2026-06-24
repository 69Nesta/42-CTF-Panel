import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pivots'

  async up() {
    // role_user
    this.schema.createTable('role_user', (table) => {
      table.bigInteger('role_id').unsigned().references('id').inTable('roles').onDelete('CASCADE')
      table.bigInteger('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.primary(['role_id', 'user_id'])
    })

    // role_permissions
    this.schema.createTable('role_permissions', (table) => {
      table.bigInteger('role_id').unsigned().references('id').inTable('roles').onDelete('CASCADE')
      table.bigInteger('permission_id').unsigned().references('id').inTable('permissions').onDelete('CASCADE')
      table.primary(['role_id', 'permission_id'])
    })

    // role_flag
    this.schema.createTable('role_flag', (table) => {
      table.bigInteger('role_id').unsigned().references('id').inTable('roles').onDelete('CASCADE')
      table.bigInteger('flag_id').unsigned().references('id').inTable('flags').onDelete('CASCADE')
      table.primary(['role_id', 'flag_id'])
    })
  }

  async down() {
    this.schema.dropTable('role_user')
    this.schema.dropTable('role_permissions')
    this.schema.dropTable('role_flag')
  }
}