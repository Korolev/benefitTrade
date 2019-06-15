import { LOGIN } from '../constants'

const defaultUser = {
  id: '',
  type: ''
}

export default (user = defaultUser, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN:
      return { ...user, id: payload.id }

    default:
      return user
  }
}
