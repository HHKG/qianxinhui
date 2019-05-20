<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <tab></tab>
  </div>
</template>

<script>
	import Tab from './components/Tab'
export default {
  name: 'App',
  components:{
  	'tab':Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
