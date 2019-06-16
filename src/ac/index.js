import {
  LOGIN,
  LOAD_PRODUCTS,
  LOAD_USER,
  LOAD_PROVIDERS,
  LOAD_CONSUMERS
} from '../constants'

export function login(id, type) {
  return {
    type: LOGIN,
    payload: { id, type }
  }
}

export function loadProductsByUserId(userId) {
  return {
    type: LOAD_PRODUCTS,
    payload: { userId }
  }
}

export function loadViewedUser(userId) {
  console.log(userId)
  return {
    type: LOAD_USER,
    payload: { userId }
  }
}

export function loadProviders() {
  return {
    type: LOAD_PROVIDERS
  }
}

export function loadConsumers() {
  return {
    type: LOAD_CONSUMERS
  }
}
