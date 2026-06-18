/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'auth.redirect.intra': {
    methods: ["GET","HEAD"],
    pattern: '/oauth/redirect/intra',
    tokens: [{"old":"/oauth/redirect/intra","type":0,"val":"oauth","end":""},{"old":"/oauth/redirect/intra","type":0,"val":"redirect","end":""},{"old":"/oauth/redirect/intra","type":0,"val":"intra","end":""}],
    types: placeholder as Registry['auth.redirect.intra']['types'],
  },
  'auth.callback.intra': {
    methods: ["GET","HEAD"],
    pattern: '/oauth/callback/intra',
    tokens: [{"old":"/oauth/callback/intra","type":0,"val":"oauth","end":""},{"old":"/oauth/callback/intra","type":0,"val":"callback","end":""},{"old":"/oauth/callback/intra","type":0,"val":"intra","end":""}],
    types: placeholder as Registry['auth.callback.intra']['types'],
  },
  'auth.login': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'auth.logout': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.logout']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
