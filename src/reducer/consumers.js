import { getConsumers } from '../db'
import { LOAD_CONSUMERS } from '../constants'

export default (consumers = [], action) => {
  const { type } = action
  switch (type) {
    case LOAD_CONSUMERS:
      return getConsumers()

    default:
      return consumers
  }
}
