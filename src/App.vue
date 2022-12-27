<template>
  <div id="app">
    

    <main-wrapper></main-wrapper>
  </div>
</template>

<script>

import MainWrapper from './components/MainWrapper.vue'

export default {
  name: 'App',
  components: {
    MainWrapper,
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 944px;
  margin: 0 auto;
  
}
</style>
