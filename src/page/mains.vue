<template>
  <div class="mains-wrap">
    <headers  v-on:showChoice="show" :message="showChoice"></headers>
    <router-view></router-view>
    <div class="wrap" v-show="showChoice" @touchstart="off()"></div>
  </div>
</template>
<script>
  import headers from '../components/headers'
  export default {
    name: 'mains',

    data() {
      return {
        showChoice: false
      }
    },


    methods: {
      //子组件传过来的值 $emit
      show: function (choiceShow) {
        this.showChoice = choiceShow
        console.log(this.showChoice)
      },

      //点击蒙层 页面刷新
      off() {
       this.showChoice = false
      }

    },

    components: {
      headers,
    }
  }
</script>
<style scoped lang="stylus">
  .mains-wrap
    width 100%
    height 100%
    .wrap
      width 100%
      height 100%
      background  rgba(0,0,0,0.5)
      position fixed
      top 0
      z-index 100




</style>
