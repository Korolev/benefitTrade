let providers = require('./providers.json')
let consumers = require('./consumers.json')
let products = require('./products.json')

function findById(val, arr, field) {
  field = field || 'id'
  const filtered = arr.filter((user) => user[field] === val)
  return filtered.length ? filtered[0] : null
}

export const getProviders = () => providers
export const getProviderById = (id) => findById(id, providers)

export const getConsumers = () => consumers
export const getConsumerById = (id) => findById(id, consumers)

export const getProductsByUserId = (userId) =>
  findById(userId, products, 'userId')
