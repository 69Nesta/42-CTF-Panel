import { Bouncer } from '@adonisjs/bouncer'
import User from '#models/user'

export const hasPermission = Bouncer.ability(
	async (user: User, slug: string) => user.hasPermission(slug)
)

export const hasFlag = Bouncer.ability(
	async (user: User, slug: string) => user.hasFlag(slug)
)