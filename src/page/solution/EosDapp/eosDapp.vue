<template>
  <div class="SZSC_wrap">

    <div class="content_wrap">
      <div class="title wow fadeInUp">
        <img src="../../../assets/img/xiaoshu.png" alt="">
        <span>EOS钱包</span>
      </div>
      <p class="introduce wow fadeInUp"> 基于EOS的DAPP分发平台</p>
      <div class="compare_text wow fadeInUp an1">
        <span>
          搭建一个基于EOS生态的DApp分发平台（基于EOS的DApp-Store），汇集EOS钱包、行业应用、平台工具等诸多应用，提供数字资产管理、
          DApp分发、资讯、行情等服务。为用户提供DApp集合，无论是使用哪个DAPP网站（平台支持的DApp）都无比顺滑，打造一个一站式EOS生态流量入口。
        </span>
      </div>
      <div class="imgWrap wow fadeInRight">
        <img src="../../../assets/img/EOS.png" alt="">

      </div>

    </div>
    <div class="title wow fadeInUp" style="margin-top: 2.16rem">
      <img src="../../../assets/img/xiaoshu.png" alt="">
      <span>产品功能</span>
    </div>
    <div class="produce_wrap wow fadeInUp">
      <div class="img_wrap">
        <img src="../../../assets/img/IPHONE.png" alt="">

      </div>
      <div class="procduce_content">
        <div class="produce_list wow fadeInUp an1">
          <p>EOS资产管理</p>
          <span>便捷安全的EOS数字资产管理</span>
        </div>
        <div class="produce_list wow fadeInUp an2">
          <p>DApp-Store</p>
          <span>基于EOS的DApp集合及分发</span>
        </div>
        <div class="produce_list wow fadeInUp an3">
          <p>资讯</p>
          <span>汇集最新EOS相关资讯</span>
        </div>
        <div class="produce_list wow fadeInUp an4">
          <p>行情</p>
          <span>汇集最新EOS数字资产交易行情</span>
        </div>

      </div>
    </div>


    <div class="content_wrap">
      <div class="title wow fadeInUp">
        <img src="../../../assets/img/xiaoshu.png" alt="">
        <span>产品优势</span>
      </div>
      <div class="applay_lists wow fadeInUp">
        <div class="applay_list">
          <img src="../../../assets/img/ico_85.png" alt="">
          <p>安全便捷</p>
        </div>
        <div class="applay_list">
          <img src="../../../assets/img/ico_73.png" alt="">
          <p>DAPP分发</p>
        </div>
        <div class="applay_list">
          <img src="../../../assets/img/ico_24.png" alt="">
          <p>移动设计</p>
        </div>
        <div class="applay_list">
          <img src="../../../assets/img/ico_96.png" alt="">
          <p>流量入口</p>
        </div>
      </div>
    </div>

    <div class="wallat-service">
      <div class="otc-service-title wow fadeInUp">
        <img src="../../../assets/img/xiaoshu.png" alt="">
        <span>服务流程</span>
        <span class="min">一站式的定制性服务的流程</span>
      </div>
      <div class="otc-service-img wow zoomIn">
        <img src="../../../assets/img/fuwuliucheng.png" alt="">
      </div>

    </div>

    <!--&lt;!&ndash;mint UI 弹出层&ndash;&gt;-->
    <!--<mt-popup class="popupWrap" v-model="popupVisible" popup-transition="popup-fade">-->
    <!--<div class="popupImg">-->
    <!--<img src="../../../assets/img/shangcheng_fangan.png" alt="">-->
    <!--</div>-->
    <!--</mt-popup>-->



    <footers></footers>


  </div>
</template>
<script>
  import footers from '../../../components/footers'
  import {WOW} from 'wowjs'
  export default {
    name: 'eosdapp',

    data() {
      return {

      }
    },

    components: {

      footers
    },

    mounted() {
      this.wow()
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


  }
</script>
<style scoped lang="stylus">
  .an1
    animation-delay:0.1s
  .an2
    animation-delay:0.2s
  .an3
    animation-delay:0.3s
  .an4
    animation-delay:0.4s
  .an5
    animation-delay:0.5s
  .an6
    animation-delay:0.6s
  .an7
    animation-delay:0.7s

  .SZSC_wrap
    width 100%
    background #0E0F5B url("../../../assets/img/beijing.png") no-repeat
    background-size 100%
    /*padding 0 1rem*/
    box-sizing border-box
    /*padding-top 4.5rem*/
    overflow hidden
    .content_wrap
      width 100%
      padding 0 1rem
      box-sizing border-box
      margin-top 4.69rem
      .title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        position relative
        img
          width 2.03rem
          height 1.84rem
          margin-left -1rem
        span
          font-size:1.06rem;
          font-weight 800;
          color:rgba(255,255,255,1);
          line-height:1.84rem;
          margin-top 2rem
          position absolute
          top -1.8rem
          left 1.8rem


      .introduce
        font-size:0.94rem;
        font-weight:500;
        color:rgba(0,255,223,1);
        margin-left 2.7rem
        margin-top 1rem
      .compare_text
        margin-top 1rem
        span
          font-size:0.75rem;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:1.13rem;
      .imgWrap
        width 100%
        height 15.25rem
        margin-top 1.22rem
        text-align center
        img
          width 14.13rem
          height 100%


      .compare_lists
        width 100%
        .compare_list
          width 100%
          height 8rem
          margin-top 2.69rem
          .compare_img
            width 6.75rem
            height 100%
            float left
            margin-right 1.34rem
            position relative
            img
              width 6.75rem
              height 6.34rem
              position absolute
              top 0
              bottom 0
              left 0
              right 0
              margin auto
          .p_title
            font-size:0.94rem;
            font-weight:600;
            color:rgba(0,255,223,1);
            line-height:0.94rem;
            margin-bottom 1rem
          span
            font-size:0.75rem;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:1.25rem;



      .advantage_lists
        .advantage_list
          margin-top 1.69rem
          p
            font-size:0.88rem;
            font-weight:500;
            color:rgba(0,255,223,1);
            line-height:1.13rem;
            margin-bottom 0.34rem
          span
            font-size:0.75rem;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:1.13rem;
      .applay_lists
        width 100%
        margin-top 1.44rem
        display flex
        justify-content space-around
        flex-flow wrap
        .applay_list
          width 5.18rem
          margin-bottom  0.63rem
          height 6.69rem
          border:1px solid rgba(123,120,187,1);
          border-radius 0.3rem
          text-align center
          img
            width 3.59rem
            margin 0.84rem 0 0.8rem
            height 3.19rem
          p
            font-size:0.75rem;
            font-weight:400;
            color:rgba(0,255,223,1);
            line-height:1rem;
    .title
      width 80%
      height 1.84rem
      line-height 1.84rem
      margin-left 1rem
      //background aqua
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
        top -1.8rem
        left 2.8rem
    .produce_wrap
      width 100%
      height 15rem
      margin-top 4rem
      margin-bottom 5rem
      background:linear-gradient(90deg,rgba(11,6,217,0.24),rgba(0,255,223,0));
      /*background #00ffdf*/
      .img_wrap
        height 18.94rem
        width 10rem
        float left
        margin-left 1rem
        margin-top -2.13rem
        img
          width 100%
          height 100%
      .procduce_content
        width 10.5rem
        height 100%
        float right
        margin-right 1rem
        display flex
        justify-content space-around
        flex-flow column
        padding 0.8rem 0
        box-sizing border-box
        .produce_list
          p
            font-size:0.75rem;
            font-weight:500;
            color:rgba(0,255,223,1);
            line-height:1.5rem;
          span
            font-size:0.75rem;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:0.81rem;
    .wallat-service
      width 100%
      //background #C81623
      overflow hidden
      margin-top 3.28rem
      margin-bottom 3rem
      .otc-service-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 0
        position relative
        padding-left 1rem
        box-sizing border-box
        img
          width 2.03rem
          height 1.84rem
          float left
        span
          font-size:1.06rem;
          font-weight 800;
          color:rgba(255,255,255,1);
          line-height:1.84rem;
          margin-top 2rem

        .min
          font-size 0.75rem
          font-weight 400
          display inline-block
          margin-left 4.7rem
          margin-top 2.2rem
          position absolute
          top -1.9rem
          left 3rem
      .otc-service-img
        width 20.96rem
        height 17.09rem
        //background #C81623
        margin 2.38rem auto 0
        img
          width 100%
          height 100%



    .popupWrap
      width 100%
      .popupImg
        width 100%
        background #0E0F5B
        height 100%
        img
          width 100%

</style>
