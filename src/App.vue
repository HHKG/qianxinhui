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

}
</style>
