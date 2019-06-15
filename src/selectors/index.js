export const userLoggedInSelector = (state) =>
  Boolean(state.user && state.user.id && state.user.id.length)
