<style>
  header{
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 60px;
  }
</style>

<template>
  <aside>
    <ul>
      <li v-for="(link, index) in links"
        :key="index">
        <router-link :to="link.url">{{link.page}}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
  export default {
    name: 'SideBar',
    props: {
      links: {
        type: Array,
        default: () => [
          {
            page : 'Home',
            url : '/'
          },
          {
            page : 'About',
            url : '/about'
          }
        ]
      }
    }
  }
</script>
