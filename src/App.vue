<template>
  <div id="app">
    <NavigationMenu />
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu'

export default {
  name: 'App',
  components: {
    NavigationMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
