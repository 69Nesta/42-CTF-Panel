import { manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { FlagSchema } from '#database/schema'
import Role from '#models/role'

export default class Flag extends FlagSchema {
	@manyToMany(() => Role, { pivotTable: 'role_flag' })
	declare roles: ManyToMany<typeof Role>
}