/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', {}).as('home')

router
	.group(() => {
		router.get('oauth/redirect/intra', [controllers.Auth, 'redirect']).as('auth.redirect.intra')
		router.get('oauth/callback/intra', [controllers.Auth, 'callback']).as('auth.callback.intra')
		router.get('login', [controllers.Auth, 'index']).as('auth.login')
	})
	.use(middleware.guest())

// router
//     .group(() => {
//         router.get('signup', [controllers.NewAccount, 'create'])
//         router.post('signup', [controllers.NewAccount, 'store'])

//         router.get('login', [controllers.Session, 'create'])
//         router.post('login', [controllers.Session, 'store'])
//     })
//     .use(middleware.guest())

router
    .group(() => {
        router.post('logout', [controllers.Auth, 'destroy']).as('auth.logout')
    })
    .use(middleware.auth())
