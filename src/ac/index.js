import { LOGIN } from '../constants'

export function login(id) {
  return {
    type: LOGIN,
    payload: { id }
  }
}
