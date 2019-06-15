let providers = require('./providers.json')
let consumers = require('./consumers.json')

function findById(id, arr) {
  console.log(arr)
  const filtered = arr.filter((user) => user.id === id)
  console.log(filtered)
  return filtered.length ? filtered[0] : null
}

export const getProviders = () => providers
export const getProviderById = (id) => findById(id, providers)

export const getConsumers = () => consumers
export const getConsumerById = (id) => findById(id, consumers)
