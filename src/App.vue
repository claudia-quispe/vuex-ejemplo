<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ComedyMovies />
    <FamilyMovies />
  </div>
</template>

<script>
import FamilyMovies from './components/FamilyMovies.vue'
import ComedyMovies from './components/ComedyMovies.vue'

export default {
  name: 'App',
  components: {
    FamilyMovies,
    ComedyMovies,
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
