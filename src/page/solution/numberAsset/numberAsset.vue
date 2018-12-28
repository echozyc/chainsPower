<template>
  <div class="otc-wrap">
    <div class="otc-top">
      <div class="otc-top-title wow fadeInUp">
        <img src="../../../assets/img/xiaoshu.png" alt="">
        <span>数字交易系统特色</span>
      </div>

      <p class="introduce wow fadeInUp">——专业、成熟、前沿、更快、更稳、更安全</p>

      <div class="otc-top-text wow fadeInUp">
          <span>
                数字交易系统由数字货币交易体系的周边配套设施组合形成的综合性数字交易平台系统。完整支持主流币种交易体系，
            不断完善的数字货币交易机制，在完整交易体系的基础上，进一步完善交易系统的策略和生态机制，不断提高安全防护级别。
          </span>
      </div>

      <div class="otc-top-img wow fadeInUp">
        <img src="../../../assets/img/shuzijiaoyixitong@2x.png" alt="">
      </div>

      <div class="top_text_wrap wow fadeInUp">
        <p>
          具有三级缓存超高并发 &nbsp|&nbsp
          全球50多家数币交易所共同的选择
          支持10万人同时在线交易 &nbsp|&nbsp
          多重加密方式，安全有保障<br>
          金融系统主流的Java语言开发，稳定高效的分布式系统架构


        </p>
      </div>


    </div>

    <div class="otc-system">
      <div class="otc-system-title wow fadeInUp">
        <img src="../../../assets/img/xiaoshu.png" alt="">
        <span>系统优点</span>
      </div>

      <p class="introduce wow fadeInUp">产品功能：包含系统安全、冷热钱包、风控体系完善、撮合系统、行情图标、财务系统、交易挖矿、全球短信、即时聊天</p>
      <div class="solution-middle-lists">
        <div class="solution-middle-list wow fadeInLeft" @click="goto('/solution/otc')">
          <img src="../../../assets/img/icon_1.png" alt="">
          <p>OTC场外<br>交易系统</p>
          <img src="../../../assets/img/liaojiegengduo.png" alt="" class="moreImg">
        </div>
        <div class="solution-middle-list  wow fadeInLeft" @click="goto('/solution/bibi')">
          <img src="../../../assets/img/icon_2.png" alt="">
          <p>币币交易<br>系统</p>
          <img src="../../../assets/img/liaojiegengduo.png" alt="" class="moreImg">
        </div>
        <div class="solution-middle-list  wow fadeInRight" @click="goto('/solution/futures')">
          <img src="../../../assets/img/icon_3.png" alt="">
          <p>期货交易<br>系统</p>
          <img src="../../../assets/img/liaojiegengduo.png" alt="" class="moreImg">
        </div>
        <div class="solution-middle-list  wow fadeInRight" @click="goto('/solution/robot')">
          <img src="../../../assets/img/icon_4.png" alt="">
          <p>机器人</p>
          <img src="../../../assets/img/liaojiegengduo.png" alt="" class="moreImg">
        </div>

      </div>

    </div>

    <div class="otc-produce">
      <div class="otc-produce-title wow fadeInUp">
        <img src="../../../assets/img/xiaoshu.png" alt="">
        <span>强大k线技术</span>
      </div>
      <div class="produce_img wow fadeInLeft">
        <img src="../../../assets/img/canvas.png" alt="">
      </div>
      <div class="produce_text wow fadeInUp">
        <p>
          <span>专业K线数据：</span>
          专业版K线主要采用Js开发完成，并利用SEAJS完成对JS的管理。结合gulp压缩js,css等资源文件，提高网络传输速率；
          数据方面采用websocket+node+mq+redis做数据推送，队列任务和缓存等技术提高了系统的并发处理能力。
        </p>

      </div>
      <div class="produce_lists">
        <div class="produce_list wow fadeInLeft">
          <div class="img">
            <img src="../../../assets/img/kxian_ico_1@2x.png" alt="">
          </div>
          <p class="p1">采用数据推送技术</p>
          <p class="p2">使行情速度提高10倍，行情信息<br>更丰富，盘口行情揭示更快</p>

        </div>
        <div class="produce_list wow fadeInLeft">
          <div class="img">
            <img src="../../../assets/img/kxian_ico_2@2x.png" alt="">
          </div>
          <p class="p1">采用缓存和队列技术</p>
          <p class="p2">提高系统并发处理能力</p>

        </div>
        <div class="produce_list wow fadeInLeft">
          <div class="img">
            <img src="../../../assets/img/kxian_ico_1@2x.png" alt="">
          </div>
          <p class="p1">采用分布式服务技术</p>
          <p class="p2">保证撮合引擎7*24小时0中断运行</p>

        </div>

      </div>

    </div>

    <div class="otc-service">
      <div class="otc-service-title wow fadeInUp">
        <img src="../../../assets/img/xiaoshu.png" alt="">
        <span>技术优势</span>
      </div>
      <div class="service_lists ">
        <div class="service_list  wow fadeInUp">
          <div class="img">
            <img src="../../../assets/img/youshi_ico_1@2x.png" alt="">
          </div>
          <p>先进浏览器K线工具</p>
        </div>
        <div class="service_list  wow fadeInUp">
          <div class="img">
            <img src="../../../assets/img/youshi_ico_2@2x.png" alt="">
          </div>
          <p>数据库读写分离支持复杂查询</p>
        </div>
        <div class="service_list  wow fadeInUp">
          <div class="img">
            <img src="../../../assets/img/youshi_ico_3@2x.png" alt="">
          </div>
          <p>面向SOA的超高扩展性</p>
        </div>
        <div class="service_list  wow fadeInUp">
          <div class="img">
            <img src="../../../assets/img/youshi_ico_4@2x.png" alt="">
          </div>
          <p>负载均衡，动静分离部署</p>
        </div>
        <div class="service_list  wow fadeInUp">
          <div class="img">
            <img src="../../../assets/img/youshi_ico_5@2x.png" alt="">
          </div>
          <p>SSM开发框架</p>
        </div>
        <div class="service_list  wow fadeInUp">
          <div class="img">
            <img src="../../../assets/img/youshi_ico_6@2x.png" alt="">
          </div>
          <p>强大三级数据缓存机制</p>
        </div>
        <div class="service_list  wow fadeInUp">
          <div class="img">
            <img src="../../../assets/img/youshi_ico_7@2x.png" alt="">
          </div>
          <p>冷存储，SSL数据加密</p>
        </div>
        <div class="service_list  wow fadeInUp">
          <div class="img">
            <img src="../../../assets/img/youshi_ico_8@2x.png" alt="">
          </div>
          <p>开放API接口</p>
        </div>
        <div class="service_list" style="opacity: 0">
          <div class="img">
            <img src="../../../assets/img/youshi_ico_1@2x.png" alt="">
          </div>
          <p>先进浏览器K线工具</p>
        </div>

      </div>

    </div>

    <footers></footers>


  </div>
</template>
<script>
  import {WOW} from 'wowjs'
  import footers from '../../../components/footers'
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
      },

      goto(path) {
        this.$router.push(path)
      },
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
    background #0E0F5B url("../../../assets/img/beijing.png") no-repeat
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

      .introduce
        font-size:0.84rem;
        font-weight:500;
        margin 0.7rem 0 1.4rem  2.3rem
        color:rgba(0,255,223,1);
        line-height:0.81rem;
      .otc-top-img
        width 16.28rem
        height 11.78rem
        //background white
        margin 1.56rem auto 0
        img
          width 100%
          height 100%
      .top_text_wrap
        width 100%
        margin-top 1.84rem
        /*height 7.06rem*/
        border:1px solid rgba(0,255,223,1);
        box-sizing border-box
        padding 0.9rem 0.7rem
        p
          font-size:0.75rem;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:1.7rem;


      .otc-top-text
        margin-top 21px
        span
          font-size:0.75rem;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:1.13rem;




    .otc-system
      width 100%
      /*height 25.59rem*/
      //background #C81623
      overflow hidden
      margin-top 1.2rem
      padding-bottom 2rem
      box-sizing border-box
      .otc-system-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 1.5rem
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


      .introduce
        font-size:0.75rem;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:1.13rem;
        margin-left 2.5rem
        margin-top 0.59rem
      .solution-middle-lists
        width 100%
        height 7.5rem
        //background white
        margin-top 1.13rem
        display flex
        justify-content space-around
        .solution-middle-list
          width 5.08rem
          height 100%
          //border: 0.5px solid #00FFDF
          border-radius: 0.3rem
          text-align center
          float left
          background #0D34A4
          position relative
          img
            width 2.5rem
            height 2.5rem
            margin 0.54rem auto 0.49rem
          p
            font-size:0.75rem;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:1.24rem;
          .moreImg
            position absolute
            bottom -2rem
            left 1.3rem



    .otc-produce
      width 100%
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


      .produce_img
        margin-top 1.3rem
        width 100%
        height 8.9rem
        padding 0.5rem
        box-sizing border-box
        border:1px solid rgba(13,52,164,1);
        img
          width 100%
          height 100%

      .produce_text
        margin-top 1.28rem
        p
          font-size:0.75rem;
          font-weight:400;
          color #ffffff;
          line-height:1.13rem;
          span
            color #00FFDF
      .produce_lists
        margin-top 2.3rem
        width 100%
        .produce_list
          margin-top 2.2rem
          width 100%
          height 3.78rem
          .img
            width 2.5rem
            height 100%
            float left
            margin-left 3.13rem
            margin-right 2.1rem
            img
              width 100%
              height 100%
          .p1
            font-size:0.94rem;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:0.81rem;
          .p2
            font-size:0.75rem;
            margin-top 0.8rem
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:1.13rem;
    .otc-service
      width 100%
      //background #666666
      margin-top 3.75rem
      .otc-service-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 0rem
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
      .service_lists
        display flex
        justify-content space-around
        flex-flow wrap
        margin-bottom 3.53rem
        .service_list
          width 33%
          padding 0 0.9rem
          margin-top 1.38rem
          box-sizing border-box
          .img
            width 3.13rem
            height 3.13rem
            margin 0 auto
            img
              width 100%
              height 100%
          p
            font-size:0.75rem;
            text-align center
            margin-top 0.4rem
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:1.13rem;







</style>
