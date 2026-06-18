import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'auth.redirect.intra': { paramsTuple?: []; params?: {} }
    'auth.callback.intra': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.logout': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'auth.redirect.intra': { paramsTuple?: []; params?: {} }
    'auth.callback.intra': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'auth.redirect.intra': { paramsTuple?: []; params?: {} }
    'auth.callback.intra': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'auth.logout': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}