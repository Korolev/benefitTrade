let providers = require('./providers.json')
let consumers = require('./consumers.json')
let products = require('./products.json')

function findById(val, arr, field) {
  field = field || 'id'
  const filtered = arr.filter((user) => user[field] === val)
  return filtered.length ? filtered : []
}

export const getProviders = () => providers
export const getProviderById = (id) => {
    const found = findById(id, providers)
    return found.length && found[0]
}

export const getConsumers = () => consumers
export const getConsumerById = (id) => {
    const found = findById(id, consumers)
    return found.length && found[0]
}

export const getProductsByUserId = (userId) =>
  findById(userId, products, 'userId')
