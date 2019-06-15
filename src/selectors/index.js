export const userSelector = (state) => state.user
export const userLoggedInSelector = (state) =>
  Boolean(state.user && state.user.id && state.user.id.length)
