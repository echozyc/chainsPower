<template>
  <div class="otc-wrap">
    <div class="otc-top">
      <div class="otc-top-title wow fadeInLeft">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>期货交易系统</span>
      </div>


      <div class="otc-top-img wow fadeInLeft">
        <img src="../../assets/img/qihuo_pic_1.png" alt="">
      </div>
      <div class="otc-top-text wow fadeInLeft">
          <span>
                专业的数字资产场外交易系统，支持国内、海外搭建。安全稳定、专业可靠，支持数字资产的管理、交易、风险控制等一系列的生态流程。<br><br>

                系统采用金融系统主流的java语言开发，稳定高效的系统架构，多重加密方式，匠心打造服务一体化的场外交易平台系统。<br><br>

                是一套基于但是又区别于币币交易所外的模式，可利用杠杆的作用，利用少量资金博取最高利润。
          </span>
      </div>

    </div>

    <div class="otc-system">
      <div class="otc-system-title wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>系统优点</span>
      </div>
      <div class="otc-system-lists">
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_1.png" alt="">
          <p>分布式<br>架构</p>
        </div>
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_2.png" alt="">
          <p>多币种、多<br>语言支持</p>
        </div>
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/qihuo_ico_3.png" alt="">
          <p>高倍杠杆</p>
        </div>
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_4.png" alt="">
          <p>GOOGLE<br>
            双重认证</p>
        </div>

        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_5.png" alt="">
          <p>安全体系</p>
        </div>
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_6.png" alt="">
          <p>风控系统</p>
        </div>
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_7.png" alt="">
          <p>行情图表</p>
        </div>
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_8.png" alt="">
          <p>财务系统</p>
        </div>

        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_9.png" alt="">
          <p>冷热钱包</p>
        </div>
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_10.png" alt="">
          <p>撮合系统</p>
        </div>
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_11.png" alt="">
          <p>全球短信<br>网关</p>
        </div>
        <div class="otc-system-list wow fadeInUp">
          <img src="../../assets/img/OTC_ico_12.png" alt="">
          <p>交易即<br>挖矿</p>
        </div>

      </div>

    </div>

    <div class="otc-produce">
      <div class="otc-produce-title wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>产品优点</span>
      </div>
      <div class="otc-produce-lists wow fadeInUp">
        <div class="otc-produce-list">
          <img src="../../assets/img/OTC_ico_13.png" alt="">
          <p>一站式服务<br>
            最贴心</p>
        </div>
        <div class="otc-produce-list">
          <img src="../../assets/img/OTC_ico_14.png" alt="">
          <p>成熟产品、部署快、成本低</p>
        </div>
        <div class="otc-produce-list">
          <img src="../../assets/img/OTC_ico_15.png" alt="">
          <p>移动交易<br>
            更便捷</p>
        </div>
        <div class="otc-produce-list">
          <img src="../../assets/img/OTC_ico_16.png" alt="">
          <p style="margin-top: 0.5rem">风险控制</p>
        </div>
      </div>

    </div>

    <div class="otc-service">
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
    name: 'otc',

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
  .otc-wrap
    width 100%
    //height 105.44rem
    background #0E0F5B url("../../assets/img/beijing.png") no-repeat
    background-size 100%
    padding 0 1rem
    box-sizing border-box
    .otc-top
      width 100%
      //height 33.66rem
      //background: #000
      overflow hidden
      .otc-top-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 4.96rem
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

      .otc-top-img
        width 16.66rem
        height 9.22rem
        //background white
        margin 1.56rem auto 0
        img
          width 100%
          height 100%


      .otc-top-text
        margin-top 21px
        span
          font-size:0.75rem;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:1.13rem;




    .otc-system
      width 100%
      height 25.59rem
      //background #C81623
      overflow hidden
      margin-top 1.2rem
      .otc-system-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 1.19rem
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


      .otc-system-lists
        margin-top 1.2rem
        .otc-system-list
          width 5.18rem
          height 6.69rem
          border 0.5px solid rgba(123,120,187,0.6);
          border-radius:0.3rem;
          text-align center
          float left
          margin-right 0.1rem
          margin-top 0.2rem
          &:nth-child(4n)
            margin-right 0
          img
            width 2.34rem
            height 2.34rem
            margin-top 0.81rem
            margin-bottom 0.69rem
          p
            font-size:0.75rem;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:1.14rem;

    .otc-produce
      width 100%
      height 14.81rem
      //background #C81623
      overflow hidden
      margin-top 1rem
      .otc-produce-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 1.41rem
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


      .otc-produce-lists
        margin-top 1.38rem
        overflow hidden
        .otc-produce-list
          float left
          width 4.98rem
          height 8.13rem
          border 1px solid rgba(123,120,187,0.6);
          border-radius 0.3rem;
          text-align center
          margin-right 0.3rem
          &:last-child
            margin-right 0
          img
            width 2.75rem
            height 3.13rem
            margin 0.8rem auto 0.5rem
          p
            font-size:0.75rem;
            font-weight:bold;
            color:rgba(0,255,223,1);
            line-height:1.13rem;




    .otc-service
      width 100%
      height 22.94rem
      //background #666666
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
