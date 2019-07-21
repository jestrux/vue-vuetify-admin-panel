<template>
  <div class="app">
    <AppHeader @logout="logout" />

    <div class="app-body">
      <SideBar />

      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>

import AppHeader from './components/AppHeader';
import SideBar from './components/SideBar';
import { removeUser } from '../services/auth';

export default {
  name: 'MainContainer',
  components: {
    AppHeader,
    SideBar
  },
  data () {
    return {
      // nav: nav.items
    }
  },
  computed: {
    // name () {
    //   return this.$route.name
    // },
    // list () {
    //   return this.$route.matched.filter((route) => route.name || route.meta.label )
    // }
  },
  methods: {
    async logout(){
      await removeUser();
      this.$store.dispatch('setAuthUser', null);
      this.$router.replace('/login');
    }
  }
}
</script>
