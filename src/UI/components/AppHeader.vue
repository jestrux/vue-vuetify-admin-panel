<style>
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em;
    height: 60px;
  }
</style>

<template>
  <header>
    {{ title }}

    <button @click="$emit('logout')">
      LOGOUT
    </button>
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
