export default () => {};

export const setUser = (state, user) => {
  state.user = user;
};

export const completeAuthLoading = (state) => {
  state.isAuthLoading = false;
};
