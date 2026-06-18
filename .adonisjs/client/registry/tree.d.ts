/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  auth: {
    redirect: {
      intra: typeof routes['auth.redirect.intra']
    }
    callback: {
      intra: typeof routes['auth.callback.intra']
    }
    login: typeof routes['auth.login']
    logout: typeof routes['auth.logout']
  }
}
