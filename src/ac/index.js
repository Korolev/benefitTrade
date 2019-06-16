import { LOGIN, LOAD_PRODUCTS, LOAD_USER } from '../constants'

export function login(id) {
  return {
    type: LOGIN,
    payload: { id }
  }
}

export function loadProductsByUserId(userId) {
  return {
    type: LOAD_PRODUCTS,
    payload: { userId }
  }
}

export function loadViewedUser(userId) {
  return {
    type: LOAD_USER,
    payload: { userId }
  }
}
