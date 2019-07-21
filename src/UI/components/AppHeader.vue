<style>
  header{
    display: flex;
    align-items: center;
    padding: 0 1em;
    height: 60px;
  }
</style>

<template>
  <header>
    {{ title }}
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
    props: {
      title: {
        type: String,
        default: 'Admin Panel'
      }
    }
  }
</script>
