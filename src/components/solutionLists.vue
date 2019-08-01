<template>
  <div class="solution_lists_wrap ">
    <div class="solution_lists wow fadeIn">
      <div class="solution_list sp_list" @click="goto('/solution/szsc')" :class="{onlist:isCurrent('/solution/szsc')}">数字商城</div>
      <div class="solution_list" @click="goto('/solution/cpsy')" :class="{onlist:isCurrent('/solution/cpsy')}">产品溯源</div>
      <div class="solution_list" @click="goto('/solution/gyljr')" :class="{onlist:isCurrent('/solution/gyljr')}">供应链金融</div>
      <div class="solution_list" @click="goto('/solution/jcyc')" :class="{onlist:isCurrent('/solution/jcyc')}">竞猜预测</div>
      <div class="solution_list" @click="goto('/solution/qklyx')" :class="{onlist:isCurrent('/solution/qklyx')}">区块链游戏</div>
      <div class="solution_list" @click="goto('/solution/wlw')" :class="{onlist:isCurrent('/solution/wlw')}">物联网</div>
      <div class="solution_list" @click="goto('/solution/htcz')" :class="{onlist:isCurrent('/solution/htcz')}">合同存证</div>
      <div class="solution_list" @click="goto('/solution/xxaq')" :class="{onlist:isCurrent('/solution/xxaq')}">信息安全</div>
      <div class="solution_list" @click="goto('/solution/gycs')" :class="{onlist:isCurrent('/solution/gycs')}">公益慈善</div>
      <div class="solution_list" @click="goto('/solution/dsjrgzn')" :class="{onlist:isCurrent('/solution/dsjrgzn')}">大数据人工智能</div>
      <div class="solution_list" @click="goto('/solution/jflm')" :class="{onlist:isCurrent('/solution/jflm')}">积分联盟</div>
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

        //点击的list
        let onList = document.getElementsByClassName('onlist')[0]
        //第一个list的offsetLeft
        let spListLeft = document.getElementsByClassName('sp_list')[0].offsetLeft
        //lists的宽度
        let totalWidth = document.getElementsByClassName('solution_lists')[0].offsetWidth
        //屏幕宽度
        let screenWidth = document.getElementsByClassName('solution_lists_wrap')[0].offsetWidth
        //可滚动的最大距离
        let isOffsetDis = totalWidth - screenWidth
        //初始化滚动距离
        let distance = onList.offsetLeft - spListLeft

        if(distance >isOffsetDis ) {
          distance = isOffsetDis
        }

        scroll.scrollTo(- distance,0)

        // //初始化list 位置
        // switch(this.p) {
        //   case '/solution/jcyc':
        //     scroll.scrollTo(-230,0)
        //     break
        //
        //   case '/solution/qklyx':
        //     scroll.scrollTo(-230,0)
        //     break
        //
        //   case '/solution/wlw':
        //     scroll.scrollTo(-230,0)
        //     break
        //
        //   case '/solution/dsjrgzn':
        //     scroll.scrollTo(-230,0)
        //     break
        //
        //   case '/solution/jflm':
        //     scroll.scrollTo(-230,0)
        //     break
        //
        //   default:
        //     scroll.scrollTo(0,0)
        // }
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
      width 180%
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
      .onlist
        background:rgba(16,17,116,1);
        border:1px solid transparent
        color:rgba(0,255,223,1);



</style>
