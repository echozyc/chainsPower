<template>
    <div class="brand-wrap">
      <div class="brand-top">
        <div class="solution-top-title  wow fadeInUp">
          <img src="../../assets/img/xiaoshu.png" alt="">
          <span>品牌创意策划</span>
        </div>

        <p class="text-title wow fadeInUp">
          品牌推广,让您的品牌覆盖互联网每个角落
        </p>

        <div class="brand-lists">
          <div class="list-top t1 wow fadeInUp an1">
            <p class="top-title">
              品牌标识
            </p>
            <p class="top-text">
              品牌logo创意策划<br>
              及VI高端设计
            </p>
            <img src="../../assets/img/a2.png" alt="" class="m1">
          </div>

          <div class="list-top t2 wow fadeInUp an2">
            <p class="top-title">
              品牌宣传物料
            </p>
            <p class="top-text">
              吸粉海报创意策划及设计<br>
              吸粉易拉宝创意策划及设<br>
              计、吸粉文案撰写
            </p>
            <img src="../../assets/img/xuanchuanwuliaoshenqing_huaban@2x.png" alt="" class="m2">
          </div>

          <div class="list-bottom wow fadeInUp an3">

            <p class="bottom-title">品牌画册&PPT</p>

            <div class="menu" @touchend="show(1)" :class="{on:isCurrent(1)}">
              <span>品牌部分</span>
            </div>
            <div class="menu" @touchend="show(2)" :class="{on:isCurrent(2)}">
              <span>企业部分</span>
            </div>
            <div class="menu" @touchend="show(3)" :class="{on:isCurrent(3)}">
              <span>项目部分</span>
            </div>

            <img src="../../assets/img/a1.png" alt="" class="m3">

            <div class="bottom-right">
              <p v-show="this.isShow === 3">
                项目技术架构、项目应用生<br>态构造设计、项目应用场景设<br>计、项目价值策划、项目未来<br>规划、项目未来愿景
              </p>
              <p v-show="this.isShow === 1">
                品牌介绍，品牌故事、<br>品牌释义、品牌优势、<br>
                品牌愿景、品牌历程、<br>品牌标语
              </p>
              <p v-show="this.isShow === 2">企业介绍、企业使命、<br>企业精神、企业愿景、<br>
                员工准则 、企业宗旨、<br>企业价值观</p>
            </div>

          </div>

        </div>
      </div>

      <div class="brand-middle">
        <div class="solution-top-title  wow fadeInUp">
          <img src="../../assets/img/xiaoshu.png" alt="">
          <span>金牌区块链营销方案</span>
        </div>

        <div class="banner-wrap wow fadeInUp">
          <div class="banner">
            <div class="swiper-container c2" style="overflow: auto">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="content">
                    <p class="content-title">- 百家媒体快速方案 -</p>
                    <div class="content-c">
                      <p>方案策划（初案+终案）</p>
                      <p>内容策划（8篇稿件+若干素材）</p>
                      <p>媒介策略（媒体组合+排期表）</p>
                      <p>多元渠道推广（
                           <span>380</span>
                        个媒体发布）</p>
                      <p>效果监测（结案报告+后续推广建议）</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="content">
                    <p class="content-title">- KOL 引流方案 -</p>
                    <div class="content-c">
                      <p>方案策划（初案+终案）</p>
                      <p>内容策划（10篇稿件+若干素材）</p>
                      <p>媒介策略（媒体组合+排期表）</p>
                      <p>多元渠道推广（
                        <span>1500</span>
                        个媒体发布）</p>
                      <p>效果监测（结案报告+后续推广建议）</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="content">
                    <p class="content-title">- IP 引爆方案 -</p>
                    <div class="content-c">
                      <p>方案策划（初案+终案）</p>
                      <p>内容策划（10篇稿件+若干素材）</p>
                      <p>媒介策略（媒体组合+排期表）</p>
                      <p>多元渠道推广（
                        <span>7600</span>
                        个媒体发布）</p>
                      <p>效果监测（结案报告+后续推广建议）</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div class="brand-bottom">
        <div class="solution-top-title  wow fadeInUp">
          <img src="../../assets/img/xiaoshu.png" alt="">
          <span>合作媒体</span>
        </div>

        <div class="brand-bottom-lists">
          <div class="brand-list wow fadeInUp an1">
            <img src="../../assets/img/logo_1.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an2">
            <img src="../../assets/img/logo_2.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an3">
            <img src="../../assets/img/logo_3.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an1">
            <img src="../../assets/img/logo_4.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an2">
            <img src="../../assets/img/logo_5.png" alt="">
          </div>

          <div class="brand-list wow fadeInUp an3">
            <img src="../../assets/img/logo_6.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an1">
            <img src="../../assets/img/logo_7.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an2">
            <img src="../../assets/img/logo_8.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an3">
            <img src="../../assets/img/logo_9.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an1">
            <img src="../../assets/img/logo_10.png" alt="">
          </div>

          <div class="brand-list wow fadeInUp an2">
            <img src="../../assets/img/logo_11.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an3">
            <img src="../../assets/img/logo_12.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an1">
            <img src="../../assets/img/logo_13.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an2">
            <img src="../../assets/img/logo_14.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an3">
            <img src="../../assets/img/logo_15.png" alt="">
          </div>

          <div class="brand-list wow fadeInUp an1">
            <img src="../../assets/img/logo_16.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an2">
            <img src="../../assets/img/logo_17.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an3">
            <img src="../../assets/img/logo_18.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an1">
            <img src="../../assets/img/logo_19.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an2">
            <img src="../../assets/img/logo_20.png" alt="">
          </div>

          <div class="brand-list wow fadeInUp an3">
            <img src="../../assets/img/logo_21.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an1">
            <img src="../../assets/img/logo_22.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an2">
            <img src="../../assets/img/logo_23.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an3">
            <img src="../../assets/img/logo_24.png" alt="">
          </div>
          <div class="brand-list wow fadeInUp an1">
            <img src="../../assets/img/logo_25.png" alt="">
          </div>
        </div>

      </div>

      <footers></footers>




    </div>
</template>
<script>
  import Swiper from 'swiper';
  import {WOW} from 'wowjs'
  import footers from '../../components/footers'
    export default {
      name: 'brand',

      data() {
        return {
          isShow: 1
        }
      },

      components: {
        footers
      },

      methods: {
        show(path) {
          this.isShow = path
        },

        isCurrent(path) {
          return this.isShow === path
        },

        //swiper init
        swiperInit() {
          var swiper = new Swiper('.c2', {
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            initialSlide :1,
            //loop:true,
            coverflow: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows : true
            }
          });

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

      mounted() {
        this.swiperInit()
        this.wow()
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

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width 14.56rem
    height 18.63rem
  }

  .brand-wrap
    width 100%
    //height 116rem
    background #0E0F5B url("../../assets/img/beijing.png") no-repeat
    background-size 100%
    .brand-top
      width 100%
      height 32.78rem
      box-sizing border-box
      padding 0 1rem
      //background #00ffdf
      overflow hidden
      .solution-top-title
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


      .text-title
        font-size:0.88rem;
        font-weight:800;
        margin-top 0.91rem
        margin-left 2.6rem
        color:rgba(0,255,223,1);
        line-height:0.81rem;
      .brand-lists
        width 100%
        height 18.8rem
        margin-top 1.84rem
        //background #2b58f5
        .list-top
          width:10.63rem;
          height:8.13rem;
          background:rgba(13,52,164,1);
          border-radius:0.3rem;
          text-align center
          position relative
          .top-title
            font-size:0.94rem;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height:0.81rem;
            margin-top 1.45rem
          .top-text
            font-size:0.75rem;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:1.13rem;
            margin-top 1.38rem
          .m1
            width 7.37rem
            height 2.26rem
            position absolute
            bottom 0.81rem
            right 0
          .m2
            width 4.34rem
            height 4.5rem
            position absolute
            bottom 0
            right 0

        .t1
          float left
        .t2
          float right
        .list-bottom
          width:100%
          height:10.31rem;
          background:rgba(13,52,164,1);
          border-radius:0.3rem;
          float left
          margin-top 0.3rem
          position relative
          .bottom-title
            font-size:0.94rem;
            font-weight:bold;
            color:rgba(255,255,255,1);
            line-height:0.81rem;
            margin-top 1.28rem
            margin-left 2.44rem
            margin-bottom 1rem
          .on
            background:rgba(2,35,130,1);
          .menu
            width:5.44rem;
            height:1.56rem;
            line-height 1.56rem
            text-align center
            border-radius:1rem;
            margin-top 0.5rem
            margin-left 2.66rem
            position relative
            z-index 10
            span
              font-size:0.75rem;
              font-weight:bold;
              color:rgba(0,255,223,1);
              line-height:0.81rem;
          .m3
            width 7.06rem
            height 5.66rem
            position absolute
            bottom 0
            left 0.87rem
          .bottom-right
            width:11.78rem;
            height:8.19rem;
            line-height 8.19rem
            background:linear-gradient(90deg,rgba(0,255,228,0.35),rgba(13,52,164,0.57));
            //opacity:0.55;
            border-radius:0.3rem;
            text-align center
            position absolute
            top 1.06rem
            right 0
            p
              font-size:0.75rem;
              font-weight:500;
              color:rgba(255,255,255,1);
              line-height:1.13rem;
              margin-top 1.8rem
    .brand-middle
      width 100%
      //height 25rem
      //background #00ffdf
      .solution-top-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        position relative
        padding 0 1rem
        box-sizing border-box
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
          left 3.4rem


      .banner-wrap
        width 100%
        height 18.63rem
        margin-top 1.75rem
        //sbackground #00ccff
        .banner
          width 100%
          height 100%
          .content
            width 14.56rem
            height 18.63rem
            margin 0 auto
            background:rgba(13,52,164,1);
            border-radius:0.5rem;
            text-align center
            overflow hidden
            .content-title
              font-size:0.94rem;
              font-weight:800;
              color:rgba(255,255,255,1);
              line-height:0.81rem;
              margin-top 1.66rem
            .content-c
              width 13.34rem
              height 15.56rem
              margin 1.5rem auto 0
              background:linear-gradient(180deg,rgba(0,255,228,0.13),rgba(13,52,164,0.13));
              border-radius:0.3rem
              padding-top 0.5rem
              box-sizing border-box
              p
                font-size:0.75rem;
                margin-top 1.53rem
                font-weight:bold;
                color:rgba(0,255,223,1);
                line-height:0.81rem;
                >span
                  font-size:1.13rem;
                  color #FFDE00
    .brand-bottom
      width 100%
      //height 32.78rem
      box-sizing border-box
      padding 0 1rem
      overflow hidden
      margin-bottom 4rem
      .solution-top-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 3.25rem
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


      .brand-bottom-lists
        margin-top 1.5rem
        .brand-list
          width 6.75rem
          height 2.19rem
          float left
          margin-top 0.63rem
          margin-right 0.55rem
          img
            width 100%
            height 100%
          &:nth-child(3n)
            margin-right 0

</style>
