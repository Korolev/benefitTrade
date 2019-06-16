export const userSelector = (state) => state.user
export const userLoggedInSelector = (state) =>
  Boolean(state.user && state.user.id && state.user.id.length)

export const userViewedSelector = (state) => state.userViewed
export const userProductsSelector = (state) => state.products
export const userProvidersSelector = (state) => state.providers
export const userConsumerSelector = (state) => state.consumers
