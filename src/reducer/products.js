import { getProductsByUserId } from '../db'
import { LOAD_PRODUCTS } from '../constants'

const defaultProducts = []

export default (products = defaultProducts, action) => {
  const { type, payload } = action

  switch (type) {
    case LOAD_PRODUCTS:
      const userId = payload.userId
      const foundProducts = getProductsByUserId(userId)
      return foundProducts ? foundProducts : products

    default:
      return products
  }
}
