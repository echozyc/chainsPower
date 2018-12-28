<template>
  <div class="solution_lists_wrap ">
    <div class="solution_lists wow fadeIn">
      <div class="solution_list" @click="goto('/solution/szsc')" :class="{on:isCurrent('/solution/szsc')}">数字商城</div>
      <div class="solution_list" @click="goto('/solution/cpsy')" :class="{on:isCurrent('/solution/cpsy')}">产品溯源</div>
      <div class="solution_list" @click="goto('/solution/gyljr')" :class="{on:isCurrent('/solution/gyljr')}">供应链金融</div>
      <div class="solution_list" @click="goto('/solution/jcyc')" :class="{on:isCurrent('/solution/jcyc')}">竞猜预测</div>
      <div class="solution_list" @click="goto('/solution/qklyx')" :class="{on:isCurrent('/solution/qklyx')}">区块链游戏</div>
      <div class="solution_list" @click="goto('/solution/wlw')" :class="{on:isCurrent('/solution/wlw')}">物联网</div>
      <div class="solution_list" @click="goto('/solution/htcz')" :class="{on:isCurrent('/solution/htcz')}">合同存证</div>
      <div class="solution_list" @click="goto('/solution/xxaq')" :class="{on:isCurrent('/solution/xxaq')}">信息安全</div>
      <div class="solution_list" @click="goto('/solution/gycs')" :class="{on:isCurrent('/solution/gycs')}">公益慈善</div>
      <div class="solution_list" @click="goto('/solution/dsjrgzn')" :class="{on:isCurrent('/solution/dsjrgzn')}">大数据人工智能</div>
      <div class="solution_list" @click="goto('/solution/jflm')" :class="{on:isCurrent('/solution/jflm')}">积分联盟</div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {WOW} from 'wowjs'
  export default {
    name: 'solutionLists',

    data() {
      return {
        p: ''
      }
    },

    mounted() {
      this.p = this.$route.path
      this.initBetterScroll()
      this.wow()
    },

    methods: {
      initBetterScroll() {
        let scroll = new BScroll('.solution_lists_wrap',{
          scrollX: true,
          click: true,
          bounce: true,
        })

        //初始化list 位置
        switch(this.p) {
          case '/solution/jcyc':
            scroll.scrollTo(-230,0)
            break

          case '/solution/qklyx':
            scroll.scrollTo(-230,0)
            break

          case '/solution/wlw':
            scroll.scrollTo(-230,0)
            break

          case '/solution/dsjrgzn':
            scroll.scrollTo(-230,0)
            break

          case '/solution/jflm':
            scroll.scrollTo(-230,0)
            break

          default:
            scroll.scrollTo(0,0)
        }
      },

      goto(path) {
        this.$router.push(path)
      },

      isCurrent(params) {
        return this.$route.path === params

      },

      //wow.js初始化
      wow() {
        let wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
      }
    },
  }
</script>
<style scoped lang="stylus">
  .solution_lists_wrap
    /*padding-left 1rem*/
    box-sizing border-box
    width 100%
    height 5rem
    /*background #00ffdf*/
    overflow hidden
    .solution_lists
      width 165%
      height 100%
      padding-left 1rem
      box-sizing border-box
      .solution_list
        float left
        margin-right 0.75rem
        padding 0.5rem 1.1rem
        margin-bottom 0.59rem
        box-sizing border-box
        border:1px solid rgba(123,120,187,1)
        border-radius 1rem
        font-size:0.75rem;
        font-weight:600;
        color:rgba(168,170,231,1);
        line-height:1rem;
        opacity:0.76;
      .on
        background:rgba(16,17,116,1);
        border:1px solid transparent
        color:rgba(0,255,223,1);



</style>
