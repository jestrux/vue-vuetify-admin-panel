import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

import * as actions from './actions'
import mutations from './mutations'

export default new vuex.Store({
  state: {
    initialized: false,
    authUser: null,
    users: null,
    selectedUser: null,
    dashboardSummaries: [
      { id: 'clients', title: 'Clients', count: undefined, amount: undefined, visible: false },
      { id: 'savings', title: 'Savings Accounts', count: undefined, amount: undefined, visible: false },
      { id: 'loans', title: 'Loan Accounts', count: undefined,  amount: undefined, visible: false },
      { id: 'bank', title: 'Bank Account Balance', count: undefined, amount: undefined, visible: false }
    ],
    savingsData: null,
    fetchingSavingsData: false,
    adminUsers: null,
    fetchingAdminUsers: false,
    creatingAdminUser: false,
    createAdminUserError: null,
    roles: null,
    fetchingRoles: false,
    creatingRole: false,
    createRoleError: null,
    permissions: null,
    fetchingPermissions: false
  },
  actions,
  mutations
})
