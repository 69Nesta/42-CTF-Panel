import { manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { PermissionSchema } from '#database/schema'
import Role from '#models/role'

export default class Permission extends PermissionSchema {
  @manyToMany(() => Role, { pivotTable: 'role_permissions' })
  declare roles: ManyToMany<typeof Role>
}