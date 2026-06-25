/*
|--------------------------------------------------------------------------
| Bouncer abilities
|--------------------------------------------------------------------------
|
| You may export multiple abilities from this file and pre-register them
| when creating the Bouncer instance.
|
| Pre-registered policies and abilities can be referenced as a string by their
| name. Also they are must if want to perform authorization inside Edge
| templates.
|
*/

import User from '#models/user'
import { Bouncer } from '@adonisjs/bouncer'

export const hasPermission = Bouncer.ability(
	async (user: User, slug: string) => user.hasPermission(slug)
)

export const hasFlag = Bouncer.ability(
	async (user: User, slug: string) => user.hasFlag(slug)
)

export const hasRole = Bouncer.ability(
	async (user: User, slug: string) => user.hasRole(slug)
)