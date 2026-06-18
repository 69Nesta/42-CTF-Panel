import { IntraUserPayload } from '#providers/ally/intra_driver'
import type { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
// import User from '#models/user'


export default class IntraAuthController {
	async index({ inertia }: HttpContext) {
		return inertia.render('auth/login', {})
	}

	async redirect({ ally }: HttpContext) {
		return ally.use('intra').redirect()
	}

	async callback({ ally, auth, response }: HttpContext) {
		const intra = ally.use('intra')

		if (intra.accessDenied() || intra.hasError() || intra.stateMisMatch() || !intra.hasCode()) {
			return response.redirect().toRoute('auth.login')
		}

		const profile = await intra.user()
		const user_raw: IntraUserPayload = profile.original as IntraUserPayload

		user_raw.
		// const email = profile.email?.trim().toLowerCase() || null

		logger.info(profile)

		// let user = await User.findBy('login', profile.nickName)

		// if (!user) {
		// 	user = new User()
		// 	user.login = profile.nickName
		// 	user.token = profile.token.token
		// 	user.intraId = profile.id
		// }


		// user.avatarUrl = profile.avatarUrl || null
		// user.email = email
		// user.fullName = profile.name || profile.nickName
		// user.firstName = profile.original['first_name'] || null
		// user.lastName = profile.original['last_name'] || null

		// await user.save()

		// await auth.use('web').login(user)
		return response.redirect().toRoute('home')
	}

	async destroy({ auth, response }: HttpContext) {
		await auth.use('web').logout()
		return response.redirect().toRoute('home')
	}
}