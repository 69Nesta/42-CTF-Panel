/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'home': {
    methods: ["GET","HEAD"]
    pattern: '/'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: unknown
      errorResponse: unknown
    }
  }
  'auth.redirect.intra': {
    methods: ["GET","HEAD"]
    pattern: '/oauth/redirect/intra'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['redirect']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['redirect']>>>
    }
  }
  'auth.callback.intra': {
    methods: ["GET","HEAD"]
    pattern: '/oauth/callback/intra'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['callback']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['callback']>>>
    }
  }
  'auth.login': {
    methods: ["GET","HEAD"]
    pattern: '/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['index']>>>
    }
  }
  'auth.logout': {
    methods: ["POST"]
    pattern: '/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['destroy']>>>
    }
  }
}
