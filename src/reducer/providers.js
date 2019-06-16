import { getProviders } from '../db'
import { LOAD_PROVIDERS } from '../constants'

export default (providers = [], action) => {
  const { type } = action
  switch (type) {
    case LOAD_PROVIDERS:
      return getProviders()

    default:
      return providers
  }
}
