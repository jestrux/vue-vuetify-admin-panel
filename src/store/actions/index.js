import { getUser } from '../../services/auth';

export const setup = async({ commit }) => {
  try {
    let authUser = await getUser();
    if(authUser)
      authUser = JSON.parse(authUser);

    commit('SET_AUTH_USER', authUser);
    commit('SET_INITIALIZED');
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}

export const setAuthUser = async ({ commit }, authUser) => {
  try {
    commit('SET_AUTH_USER', authUser);
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}
