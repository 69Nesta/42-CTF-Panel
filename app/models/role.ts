import { manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { RoleSchema } from '#database/schema'
import Permission from '#models/permission'
import Flag from '#models/flag'
import User from '#models/user'

export default class Role extends RoleSchema {
	@manyToMany(() => User, { pivotTable: 'role_user' })
	declare users: ManyToMany<typeof User>

	@manyToMany(() => Permission, { pivotTable: 'role_permissions' })
	declare permissions: ManyToMany<typeof Permission>

	@manyToMany(() => Flag, { pivotTable: 'role_flag' })
	declare flags: ManyToMany<typeof Flag>
}