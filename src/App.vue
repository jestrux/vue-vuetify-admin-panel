<style lang="scss">
  // CoreUI Icons Set
  // @import '~@coreui/icons/css/coreui-icons.min.css';
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>

<template>
  <div>
    <Loader :size="90" v-if="!initialized" />
    <router-view v-else></router-view>
  </div>
</template>

<script>
  import Loader from './UI/components/Loader';
  import { mapState } from 'vuex';

  export default {
    name: 'app',
    mounted(){
      this.$store.dispatch('setup');
      this.$store.dispatch('getUsers');
    },
    computed: {
      ...mapState(['initialized'])
    },
    components: {
      Loader
    }
  }
</script>
