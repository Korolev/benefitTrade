import { getProviderById, getConsumerById } from '../db'
import { LOGIN, LOAD_USER } from '../constants'

const defaultUser = {
  // id: '',
  // type: ''
  id: '201',
  type: 'consumer',
  name: 'Покупатель №1',
  categories: ['категория1', 'категория2'],
  rating: 3,
  avatar: '/resources/images/avatar.png'
}

export default (user = defaultUser, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN:
      const id = payload.id
      const found = getConsumerById(id)
      return found ? { ...found } : { ...user, id }

    case LOAD_USER:
      const userId = payload.userId
      const foundUser = getConsumerById(userId)
      return foundUser ? { ...foundUser } : { ...user, userId }

    default:
      return user
  }
}
