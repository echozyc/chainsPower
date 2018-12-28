<template>
  <div class="SZSC_wrap">
    <solutionList></solutionList>

    <div class="content_wrap">
      <div class="title wow fadeInUp">
        <img src="../assets/img/xiaoshu.png" alt="">
        <span>传统VS区块链</span>
      </div>
      <div class="compare_text wow fadeInUp an1">
        <span v-html="content.text1">
        </span>
      </div>
      <div class="compare_lists">
        <div class="compare_list wow fadeInUp an2">
          <div class="compare_img">
            <img src="../assets/img/icon-g.png" alt="">
          </div>
          <div class="textWrap">
            <p class="p_title">{{content.compare.title1}}</p>
            <span v-for="i in content.compare.left">{{i}}<br></span>
          </div>
        </div>
        <div class="compare_list wow fadeInUp an3">
          <div class="compare_img">
            <img src="../assets/img/graph-lungwort-c.png" alt="">
          </div>
          <div class="textWrap">
            <p class="p_title">{{content.compare.title2}}</p>
            <span v-for="i in content.compare.right">{{i}} <br></span>
          </div>
        </div>
      </div>
      <div class="title wow fadeInUp" style="margin-top: 4.47rem">
        <img src="../assets/img/xiaoshu.png" alt="">
        <span>{{content.advantageTitle}}</span>
      </div>
      <div class="advantage_lists">
        <div class="advantage_list wow fadeInUp" v-for="(i,j) in content.advantage" :class="j">
          <p>{{i.p1}}</p>
          <span>{{i.p2}}</span>
        </div>
      </div>
    </div>
    <div class="title wow fadeInUp" style="margin-top: 4.47rem">
      <img src="../assets/img/xiaoshu.png" alt="">
      <span>解决方案</span>
    </div>
    <div class="schema_wrap wow fadeInUp">
      <div class="img_wrap">
        <slot name="solutionImg"></slot>
      </div>
    </div>


    <div class="content_wrap">
      <div class="title wow fadeInUp">
        <img src="../assets/img/xiaoshu.png" alt="">
        <span>{{content.scenesTitle}}</span>
      </div>
      <div class="applay_lists wow fadeInUp">
        <div class="applay_list" v-for="i in content.scenes.lists">
          <img :src=i.img alt="">
          <p v-html="i.p1"></p>
        </div>
      </div>
    </div>

    <div class="wallat-service">
      <div class="otc-service-title wow fadeInUp">
        <img src="../assets/img/xiaoshu.png" alt="">
        <span>服务流程</span>
        <span class="min">一站式的定制性服务的流程</span>
      </div>
      <div class="otc-service-img wow zoomIn">
        <img src="../assets/img/fuwuliucheng.png" alt="">
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
  import solutionList from './solutionLists'
  import footers from './footers'
  import BScroll from 'better-scroll'
  export default {
    name: 'shellWrap',

    props: ['content'],

    data() {
      return {

      }
    },

    components: {
      solutionList,
      footers
    },

    mounted() {
      this.initBetterScroll2()
    },

    methods: {
      initBetterScroll2() {
        let scroll2 = new BScroll('.img_wrap',{
          scrollX: true,
          scrollY: true,
          click: true,
          bounce: true
        })
      },

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
    background #0E0F5B url("../assets/img/beijing.png") no-repeat
    background-size 100%
    /*padding 0 1rem*/
    box-sizing border-box
    padding-top 4.5rem
    .content_wrap
      width 100%
      padding 0 1rem
      box-sizing border-box
      margin-top 2.4rem
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


      .compare_text
        margin-top 1rem
        span
          font-size:0.75rem;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:1.13rem;


      .compare_lists
        width 100%
        .compare_list
          width 100%
          /*height 10rem*/
          overflow hidden
          margin-top 1.69rem
          .compare_img
            width 6.25rem
            float left
            margin-top 1rem
            margin-right 1.34rem
            position relative
            img
              width 6.25rem
              height 6.34rem
          .textWrap
            width 13.5rem
            float right
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
            margin 0.84rem 0 0.4rem
            height 2.81rem
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
    .schema_wrap
      width 100%
      height 13rem
      margin-top 2.3rem
      overflow hidden
      /*background #00ffdf*/
      .img_wrap
        height 100%
        width 100%
        img
          height 100%
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
          line-height:1.24rem;
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
