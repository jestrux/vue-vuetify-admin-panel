import Vue from 'vue';

export default {
  SET_INITIALIZED(state){
    state.initialized = true;
  },

  SET_AUTH_USER(state, user){
    state.authUser = user
  },

  SET_USERS(state, users){
    state.users = users
  },

  UPDATE_USER(state, payload){
    const { index, field } = payload;
    Vue.set(state.users[index], field, payload[field])
  },

  SET_SELECTED_USER(state, user){
    state.selectedUser = user
  },

  UPDATE_SELECTED_USER(state, payload){
    const { field } = payload;
    Vue.set(state.selectedUser, field, payload[field])
  },

  SET_DASHBOARD_SUMMARIES(state, {index, value}){
    Vue.set(state.dashboardSummaries, index, value);
  },

  SET_SAVINGS_DATA(state, savingsData){
    state.savingsData = savingsData;
  },

  FETCHING_SAVINGS_DATA(state, status){
    state.fetchingSavingsData = status;
  },

  SET_ADMIN_USERS(state, adminUsers){
    state.adminUsers = adminUsers;
  },

  FETCHING_ADMIN_USERS(state, status){
    state.fetchingAdminUsers = status;
  },

  SET_ROLES(state, roles){
    state.roles = roles;
  },

  FETCHING_ROLES(state, status){
    state.fetchingRoles = status;
  },

  SET_PERMISSIONS(state, permissions){
    state.permissions = permissions;
  },

  FETCHING_PERMISSIONS(state, status){
    state.fetchingPermissions = status;
  },
}
