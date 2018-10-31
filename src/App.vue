<template>
  <div id="app">
    <Mains></Mains>
  </div>
</template>

<script>
import Mains from './page/mains'
export default {
  name: 'App',

  components: {
    Mains
  },

  methods: {
    //适配
    adapter() {
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 375 * 16+ 'px';
      console.log(document.documentElement.style.fontSize)
    }
  },

  mounted() {
    this.adapter()
  }

}
</script>

<style>
@import 'assets/css/base.css';
html,body {
  height: 100%;
  width:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  height:100%
}


</style>
