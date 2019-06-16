import { getProviderById, getConsumerById } from '../db'
import { LOAD_USER } from '../constants'

const defaultUser = {
  id: '',
  type: ''
}

export default (user = defaultUser, action) => {
  const { type, payload } = action

  switch (type) {
    case LOAD_USER:
      const userId = payload.userId
      const foundUser = getProviderById(userId)
      return foundUser ? { ...foundUser } : { ...user, userId }

    default:
      return user
  }
}
