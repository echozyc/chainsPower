<template>
  <div class="wallat-wrap">
    <div class="wallat-top">
      <div class="otc-top-title wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>钱包系统解决方案</span>
      </div>
      <div class="wallat-top-lists">
        <div class="wallat-top-list wow fadeInLeft">
          <p class="list-title">
            去中心化钱包系统
          </p>
          <span class="list-text">
            提供最安全、高效、全面的链上资产服务。支持多链一站式资产管理。采用HD钱包技术，
            多重签名加密保障数字资产安全。更有海量时时行情资讯，掌握一手区块链动态。
          </span>
          <img src="../../assets/img/wallet_ico_1.png" alt="">
        </div>
        <div class="wallat-top-list wow fadeInRight">
          <p class="list-title">
            中心化钱包系统
          </p>
          <span class="list-text">
            支持跨交易所交易，提供更加便捷的链上资产交易服务，支持多链一站式资产管理。通过专业的安全系统、
            风控系统、冷热钱包系统、财务监控系统等，多维度保障数字资产安全。
          </span>
          <img src="../../assets/img/wallet_ico_2.png" alt="">
        </div>
      </div>

    </div>

    <div class="wallat-middle">
      <div class="wallat-middle-title wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>安全、便捷、高效、独特<br>
         的数字资产管理工具</span>
      </div>
      <div class="texts wow fadeInUp">
        <p>高效的资产管理</p>
        <p>|</p>
        <p>全方位的安全保障</p>
        <p>|</p>
        <p>便携式资产管理</p>
      </div>
      <div class="wallat-middle-img wow zoomIn">
        <img src="../../assets/img/phone_1.png" alt="">
      </div>
      <div class="texts texts2 wow fadeInUp">
        <p>多币种一体式存储</p>
        <p>|</p>
        <p>全方位的安全保障</p>
        <p>|</p>
        <p>便携式资产管理</p>
      </div>
      <div class="wallat-middle-img wow zoomIn">
        <img src="../../assets/img/phone_2.png" alt="">
      </div>
    </div>

    <div class="wallat-bottom">
      <div class="otc-top-title wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>多元化解决方案</span>
      </div>
      <div class="wallat-bottom-lists wow fadeInUp">
        <div class="wallat-bottom-list">
          <img src="../../assets/img/wallet_ico_3.png" alt="">
          <p>钱包+理财<br>
            投资、借贷</p>
        </div>
        <div class="wallat-bottom-list">
          <img src="../../assets/img/wallet_ico_4.png" alt="">
          <p>钱包+数字<br>
            商城</p>
        </div>
        <div class="wallat-bottom-list">
          <img src="../../assets/img/wallet_ico_5.png" alt="">
          <p>钱包+数字资<br>
            产行情资讯</p>
        </div>
        <div class="wallat-bottom-list">
          <img src="../../assets/img/wallet_ico_6.png" alt="">
          <p>钱包+手机<br>
            挖矿</p>
        </div>
      </div>

    </div>

    <div class="wallat-service">
      <div class="otc-service-title wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>服务流程</span>
        <span class="min">一站式的定制性服务的流程</span>
      </div>
      <div class="otc-service-img wow zoomIn">
        <img src="../../assets/img/fuwuliucheng.png" alt="">
      </div>

    </div>

    <footers></footers>

  </div>
</template>
<script>
  import {WOW} from 'wowjs'
  import footers from '../../components/footers'
  export default {
    name: 'wallat',

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

      //百度信息流统计
      window._agl = window._agl || [];
      (function () {
        _agl.push(
          ['production', '_f7L2XwGXjyszb4d1e2oxPybgD']
        );
        (function () {
          var agl = document.createElement('script');
          agl.type ='text/javascript';
          agl.async = true;
          agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(agl, s);
        })();
      })();
    }
  }
</script>
<style scoped lang="stylus">


  .wallat-wrap
    width 100%
    //height 116rem
    background #0E0F5B url("../../assets/img/beijing.png") no-repeat
    background-size 100%
    padding 0 1rem
    box-sizing border-box
    .wallat-top
      width 100%
      height 27.16rem
      //background #007aff
      overflow hidden
      .otc-top-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 4.69rem
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


      .wallat-top-lists
        margin-top 4.91rem
        display flex
        justify-content space-between
        .wallat-top-list
          width 10.44rem
          height 13.78rem
          border-radius 0.3rem
          background #0D34A4
          padding 1.91rem 1.04rem 0
          box-sizing border-box
          position relative
          .list-title
            font-size:0.94rem;
            text-align center
            font-weight:bold;
            color:rgba(0,255,223,1);
            line-height:0.81rem;
          .list-text
            display inline-block
            margin-top 0.97rem
            font-size:0.75rem;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:1.13rem;
          >img
            width 5rem
            height 5rem
            position absolute
            top -3.8rem
            left 3rem
    .wallat-middle
      width 100%
      height 45.66rem
      //background #C81623
      overflow hidden
      .wallat-middle-title
        width 100%
        height 2.6rem
        line-height 2.6rem
        //background lemonchiffon
        margin-top 1.88rem
        text-align right
        >img
          width 2.03rem
          height 1.84rem
          float right
          margin-top 0.5rem
        >span
          font-size:1.06rem;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:1.56rem;
          float right
          margin-right 0.8rem

      .texts
        margin-top 1.84rem
        display flex
        justify-content space-between
        >p
          font-size:0.75rem;
          font-weight:bold;
          color:rgba(0,255,223,1);
          line-height:0.81rem;
      .wallat-middle-img
        margin-top 1.44rem
        width 20.78rem
        height 14.88rem
        img
          width 100%
          height 100%
      .texts2
        margin-top 2.88rem

    .wallat-bottom
      width 100%
      height 14.41rem
      //background lemonchiffon
      overflow hidden
      .otc-top-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 1.69rem
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
      .wallat-bottom-lists
        margin-top 1.72rem
        display flex
        justify-content space-between
        .wallat-bottom-list
          width 5.18rem
          height 6.69rem
          border:0.5px solid rgba(123,120,187,0.6);
          border-radius:0.3rem;
          text-align center
          >img
            width 2.34rem
            height 2.34rem
            margin 0.84rem auto 0
          >p
            font-size:0.75rem;
            margin-top 0.6rem
            font-weight:bold;
            color:rgba(0,255,223,1);
            line-height:1.13rem;


    .wallat-service
      width 100%
      height 22.4rem
      //background #C81623
      overflow hidden
      .otc-service-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 0
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
          top -1.8rem
          left 14.4rem
        .min
          font-size 0.75rem
          font-weight 400
          display inline-block
          margin-left 4.7rem
          margin-top 2.2rem
          position absolute
          top -1.9rem
          left 0
      .otc-service-img
        width 20.96rem
        height 17.09rem
        //background #C81623
        margin 2.38rem auto 0
        img
          width 100%
          height 100%


</style>
