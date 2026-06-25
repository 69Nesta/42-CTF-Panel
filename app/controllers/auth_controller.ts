import { IntraUserPayload } from '#providers/ally/intra_driver'
import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'


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
		let user = await User.findBy('login', profile.nickName)
		const user_original: IntraUserPayload = profile.original as IntraUserPayload

		if (!user) {
			user = new User()

			user.login = profile.nickName
			user.intraId = Number(profile.id)
			user.email = user_original.email
			user.fullName = user_original.usual_full_name || user_original.displayname
			user.firstName = user_original.first_name
			user.lastName = user_original.last_name
			user.poolYear = user_original.pool_year
			user.poolMonth = user_original.pool_month
			user.avatar = user_original.image.link
		}

		if (user.avatar !== user_original.image.link)
			user.avatar = user_original.image.link
		await user.save()

		await auth.use('web').login(user)
		return response.redirect().toRoute('home')
	}

	async destroy({ auth, response }: HttpContext) {
		await auth.use('web').logout()
		return response.redirect().toRoute('home')
	}
}