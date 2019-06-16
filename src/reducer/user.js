import { getProviderById, getConsumerById } from '../db'
import { LOGIN, LOAD_USER } from '../constants'

const defaultUser = {
  id: '',
  type: ''
}

export default (user = defaultUser, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN:
      const id = payload.id
      console.log('PAYLOAD', payload)
      const isProvider = payload.type === 'provider'
      const found = isProvider ? getProviderById(id) : getConsumerById(id)
      return found ? { ...found } : { ...user, id }

    case LOAD_USER:
      const userId = payload.userId
      const foundUser = getConsumerById(userId)
      return foundUser ? { ...foundUser } : { ...user, userId }

    default:
      return user
  }
}
