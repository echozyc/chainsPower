<template>
    <div class="robot-wrap">
      <div class="robot-top">
        <div class="robot-top-title  wow fadeInLeft">
          <img src="../../../assets/img/xiaoshu.png" alt="">
          <span>行情系统机器人</span>
        </div>
        <div class="robot-top-text wow fadeInLeft">
          <p>数字资产行情查询</p>
          <p>|</p>
          <p>交易平台公告提醒</p>
          <p>|</p>
          <p>热门行业资讯</p>
        </div>
        <div class="robot-top-lists wow fadeInLeft">
          <div class="robot-top-list">
            <img src="../../../assets/img/hangqing_ico_1.png" alt="">
            <p>多维信息<br>
             一手掌握</p>
          </div>
          <div class="robot-top-list">
            <img src="../../../assets/img/hangqing_ico_2.png" alt="">
            <p>多种数字资产<br>
              关注对比</p>
          </div>
          <div class="robot-top-list">
            <img src="../../../assets/img/hangqing_ico_3.png" alt="">
            <p>交易所公告<br>
              实时提醒</p>
          </div>
        </div>

      </div>

      <div class="robot-middle">
        <div class="robot-middle-title wow fadeInRight">
          <img src="../../../assets/img/xiaoshu.png" alt="">
          <span>交易系统机器人</span>
        </div>
        <p class="robot-middle-text wow fadeInRight">针对交易所，快速自动委托挂单、委托撤单的交易省去平台内的交易委托的一部一部的手续<br><br>

          平台可以利用机器人快速赎单，提高平台的交易量。</p>
        <div class="robot-middle-lists wow fadeInRight">
          <div class="robot-middle-list">
            <img src="../../../assets/img/hangqing_ico_4.png" alt="">
            <p>自动挂单</p>
          </div>
          <div class="robot-middle-list">
            <img src="../../../assets/img/hangqing_ico_4.png" alt="">
            <p>自动撤单</p>
          </div>
          <div class="robot-middle-list">
            <img src="../../../assets/img/hangqing_ico_6.png" alt="">
            <p>多交易策略</p>
          </div>
        </div>

      </div>

      <div class="robot-bottom">
        <div class="robot-top-title wow fadeInUp">
          <img src="../../../assets/img/xiaoshu.png" alt="">
          <span>服务流程</span>
          <span class="min">一站式的定制性服务的流程</span>
        </div>
        <div class="robot-bottom-img wow zoomIn">
          <img src="../../../assets/img/fuwuliucheng.png" alt="">
        </div>

      </div>

      <footers></footers>

    </div>
</template>
<script>
  import {WOW} from 'wowjs'
  import footers from '../../../components/footers'
  export default {
    name: 'robot',

    components: {
      footers
    },

    methods: {
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

    mounted() {
      this.wow()
    }
  }
</script>
<style scoped lang="stylus">
  .robot-wrap
    width 100%
    //height 70.69rem
    background #0E0F5B url("../../../assets/img/beijing.png") no-repeat
    background-size 100%
    padding 0 1rem
    box-sizing border-box
    .robot-top
      width 100%
      height 20.31rem
      //background red
      overflow hidden
      .robot-top-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 4.6rem
        position relative
        img
          width 2.03rem
          height 1.84rem
        span
          font-size:1.06rem;
          font-weight 800;
          color:rgba(255,255,255,1);
          line-height:1.84rem;
          margin-top 2rem
          position absolute
          top -1.9rem
          left 2.4rem

      .robot-top-text
        margin-top 1.5rem
        display flex
        justify-content space-between
        p
          font-size:0.75rem;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:1.13rem;
      .robot-top-lists
        margin-top 1.75rem
        display flex
        justify-content space-between
        .robot-top-list
          width 6.69rem
          height 8.13rem
          border:0.5px solid rgba(123,120,187,0.6);
          border-radius:0.3rem;
          text-align center
          img
            width 2.75rem
            height 3.13rem
            margin-top 0.94rem
          p
            font-size:0.94rem;
            font-weight:bold;
            color:rgba(0,255,223,1);
            line-height:1.25rem
            margin-top 0.6rem
    .robot-middle
      width 100%
      height 19.81rem
      //background #666666
      overflow hidden
      .robot-middle-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 1.22rem
        position relative
        img
          width 2.03rem
          height 1.84rem
          float right
        span
          font-size:1.06rem;
          font-weight 800;
          color:rgba(255,255,255,1);
          line-height:1.84rem;
          margin-top 2rem
          position absolute
          top -1.9rem
          left 11.4rem
      .robot-middle-text
        font-size:0.75rem;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:1.13rem
        margin-top 1.6rem
      .robot-middle-lists
        margin-top 1.75rem
        display flex
        justify-content space-between
        .robot-middle-list
          width 6.69rem
          height 7.81rem
          border:0.5px solid rgba(123,120,187,0.6);
          border-radius:0.3rem;
          text-align center
          img
            width 2.75rem
            height 3.13rem
            margin-top 1.19rem
          p
            font-size:0.94rem;
            font-weight:bold;
            color:rgba(0,255,223,1);
            line-height:1.25rem
            margin-top 0.8rem

    .robot-bottom
      width 100%
      height 24rem
      //background #C81623
      overflow hidden
      .robot-top-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 1.19rem
        position relative
        img
          width 2.03rem
          height 1.84rem
        span
          font-size:1.06rem;
          font-weight 800;
          color:rgba(255,255,255,1);
          line-height:1.84rem;
          margin-top 2rem
          position absolute
          top -1.9rem
          left 2.4rem
        .min
          font-size 0.75rem
          font-weight 400
          display inline-block
          margin-left 4.7rem
          margin-top 2.2rem

      .robot-bottom-img
        width 20.69rem
        height 17.09rem
        margin-top 2.38rem
        img
          width 100%
          height 100%
</style>
