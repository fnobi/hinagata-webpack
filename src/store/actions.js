export default () => {};

export const updateUser = ({ commit }, user) => {
  commit('setUser', user);
  commit('completeAuthLoading');
};
