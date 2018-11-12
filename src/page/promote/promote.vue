<template>
  <div class="solution-wrap">
    <div class="solution-top-wrap">
      <div class="solution-top-title  wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>提供白皮书全案策划</span>
      </div>
      <div class="text">
        <span>
          专业的品牌策划团队撰写白皮书，进行项目的行业分析、生态圈设计、产业链设计、技术架构的应用设计、项目发展规划、基金设计、
          团队成员包装、基金会架构设计、Token分配设计、技术架构设计、翻译等，并协助发币等一站式服务。
        </span>
      </div>
      <div class="solution-top-img  wow fadeInUp">
        <img src="../../assets/img/quanantuiguang_pic_1.png" alt="">
        <img src="../../assets/img/baipishu.png" alt="" class="min">
      </div>
      <div class="button  wow fadeInUp" @click="goto('/promote/whitepaper')">
        <span>了解更多</span>
        <img src="../../assets/img/jiantou.png" alt="">
      </div>

    </div>

    <div class="solution-middle-wrap">
      <div class="solution-middle-title wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>提供品牌策划及媒体推广全案</span>

      </div>
      <div class="text">
        <span>
          从策划、设计、传播到营销实战，链动提供一站式品牌全案服务。打造商业价值体系，
          每个项目的策划我们都会赋予他的准确文化、理念、精神、与价值定位，并联合50000家媒体共同推进您的项目。
        </span>
      </div>
      <div class="solution-middle-img wow fadeInUp">
        <img src="../../assets/img/quanantuiguang_pic_2.png" alt="">
        <img src="../../assets/img/logo_blue.png" alt="" class="min">
      </div>

      <div class="button wow fadeInUp" @click="goto('/promote/brand')">
        <span>了解更多</span>
        <img src="../../assets/img/jiantou.png" alt="">
      </div>

    </div>

    <div class="solution-bottom-wrap">
      <div class="solution-bottom-title wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>提供白皮书全案策划</span>
      </div>
      <div class="text">
        <span>
          引入真实区块链粉丝，快速组建区块链社群。搭建自己的长期流量池，不再局限平台赋予的流量。<br><br>

          社交化病毒传播，产生强大的引流效果。粉丝转化成客户，主动传播平台。
        </span>
      </div>
      <div class="solution-bottom-img wow fadeInUp">
        <img src="../../assets/img/quanantuiguang_pic_3.png" alt="">
        <img src="../../assets/img/siyi.png" alt="" class="min">
      </div>
      <div class="button wow fadeInUp" @click="goto('/solution/wallat')">
        <span>了解更多</span>
        <img src="../../assets/img/jiantou.png" alt="">
      </div>

    </div>

    <footers></footers>

  </div>
</template>
<script>
  import {WOW} from 'wowjs'
  import footers from '../../components/footers'
  export default {
    name: 'promote',

    components: {
      footers
    },

    methods: {
      goto(path) {
        this.$router.push(path)
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
      this.wow()
    }


  }
</script>
<style scoped lang="stylus">
  .solution-wrap
    width 100%
    //height 79.13rem
    background #0E0F5B url("../../assets/img/beijing.png") no-repeat
    background-size 100%
    padding 0 1rem
    box-sizing border-box
    .solution-top-wrap
      width 100%
      height 33.84rem
      //background #C81623
      overflow hidden
      .solution-top-title
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

      .text
        margin-top 1.44rem
        span
          font-size:0.75rem;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:1.13rem;
      .solution-top-img
        width 21.63rem
        height 14.44rem
        //background white
        margin 2rem auto 0
        position relative
        img
          width 100%
          height 100%
        .min
          width 3.09rem
          height 2.66rem
          position absolute
          top 1.8rem
          left 43%
      .button
        width 100%
        height 2.19rem
        line-height 2.29rem
        background:linear-gradient(90deg,rgba(43,88,245,1),rgba(0,246,255,1));
        border-radius:0.3rem;
        margin-top 1.56rem
        text-align center
        span
          font-size:0.94rem;
          font-weight:bold;
          color:rgba(255,255,255,1);
        img
          width 0.94rem
          height 0.94rem
          margin-left 0.69rem
          margin-top -0.2rem




    .solution-middle-wrap
      width 100%
      //height 26rem
      //background #C81623
      //overflow hidden
      .solution-middle-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 3.4rem
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
          left 5.4rem


      .text
        margin-top 1.56rem
        span
          font-size:0.75rem;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:1.13rem;
      .solution-middle-img
        width 20.53rem
        height 17.88rem
        //background white
        margin 1.06rem auto 0
        position relative
        img
          width 100%
          height 100%
        .min
          width 1.88rem
          height 1.88rem
          position absolute
          top 1.6rem
          left 46%


      .button
        width 100%
        height 2.19rem
        line-height 2.29rem
        background:linear-gradient(90deg,rgba(43,88,245,1),rgba(0,246,255,1));
        border-radius:0.3rem;
        margin-top 1.56rem
        text-align center
        span
          font-size:0.94rem;
          font-weight:bold;
          color:rgba(255,255,255,1);
        img
          width 0.94rem
          height 0.94rem
          margin-left 0.69rem
          margin-top -0.2rem


    .solution-bottom-wrap
      width 100%
      //height 25.88rem
      //background #C81623
      //overflow hidden
      margin-bottom 4rem
      .solution-bottom-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 4.31rem
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


      .text
        margin-top 1.56rem
        span
          font-size:0.75rem;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:1.13rem;
      .solution-bottom-img
        width 18.31rem
        height 15.91rem
        //background white
        margin 2rem auto 0
        position relative
        img
          width 100%
          height 100%
        .min
          width 1.56rem
          height 1.97rem
          position absolute
          top 0
          right 0
      .button
        width 100%
        height 2.19rem
        line-height 2.29rem
        background:linear-gradient(90deg,rgba(43,88,245,1),rgba(0,246,255,1));
        border-radius:0.3rem;
        margin-top 1.56rem
        text-align center
        span
          font-size:0.94rem;
          font-weight:bold;
          color:rgba(255,255,255,1);
        img
          width 0.94rem
          height 0.94rem
          margin-left 0.69rem
          margin-top -0.2rem




</style>
