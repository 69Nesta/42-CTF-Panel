import { manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import { UserSchema } from '#database/schema'
import Role from '#models/role'

export default class User extends UserSchema {
	@manyToMany(() => Role, { pivotTable: 'role_user' })
	declare roles: ManyToMany<typeof Role>

	private _permissionSlugs?: Set<string>
	private _flagSlugs?: Set<string>

	async getPermissionSlugs(): Promise<Set<string>> {
		if (this._permissionSlugs) return this._permissionSlugs

		const self = await User.query()
			.where('id', this.id)
			.preload('roles', (q) => q.preload('permissions'))
			.firstOrFail()

		this._permissionSlugs = new Set(
			self.roles.flatMap((role) => role.permissions.map((p) => p.slug))
		)
		return this._permissionSlugs
	}

	async hasPermission(slug: string): Promise<boolean> {
		return (await this.getPermissionSlugs()).has(slug)
	}

	async hasFlag(slug: string): Promise<boolean> {
		if (this._flagSlugs) return this._flagSlugs.has(slug)

		const self = await User.query()
			.where('id', this.id)
			.preload('roles', (q) => q.preload('flags'))
			.firstOrFail()

		this._flagSlugs = new Set(
			self.roles
			.flatMap((role) => role.flags.filter((f) => f.active).map((f) => f.slug))
		)
		return this._flagSlugs.has(slug)
	}
}