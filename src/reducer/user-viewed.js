import { getProviderById, getConsumerById } from '../db'
import { LOAD_USER } from '../constants'

const defaultUserViewed = {
  id: '',
  type: ''
}

export default (user = defaultUserViewed, action) => {
  const { type, payload } = action
  console.log(action)
  switch (type) {
    case LOAD_USER:
      const userId = payload.userId
      const foundUser = getProviderById(userId)
      console.log(userId)
      console.log(foundUser)
      return foundUser ? { ...foundUser } : { ...user, userId }

    default:
      return user
  }
}
