import { getProviderById, getConsumerById } from '../db'
import { LOGIN } from '../constants'

const defaultUser = {
  id: '',
  type: ''
}

export default (user = defaultUser, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN:
      const id = payload.id
      const found = getConsumerById(id)
      return found ? { ...found } : { ...user, id }

    default:
      return user
  }
}
