<template>
   <div class="solution-wrap">
     <div class="solution-top-wrap">
       <div class="solution-top-title  wow fadeInUp">
         <img src="../../assets/img/xiaoshu.png" alt="">
         <span>提供企业公链、私链、联盟链解决方案</span>

       </div>
       <div class="solution-top-img  wow fadeInUp">
         <img src="../../assets/img/jiejuefangan_pic_1.png" alt="">
       </div>
       <div class="button  wow fadeInUp" @click="goto('/solution/underlying')">
         <span>了解更多</span>
         <img src="../../assets/img/jiantou.png" alt="">
       </div>

     </div>

     <div class="solution-middle-wrap">
       <div class="solution-middle-title wow fadeInUp">
         <img src="../../assets/img/xiaoshu.png" alt="">
         <span>数字资产交易系统解决方案</span>

       </div>
       <div class="solution-middle-img wow fadeInUp">
         <img src="../../assets/img/jiejuefangan_pic_2.png" alt="">
       </div>
       <div class="solution-middle-lists">
         <div class="solution-middle-list wow fadeInLeft" @click="goto('/solution/otc')">
           <img src="../../assets/img/icon_1.png" alt="">
           <p>OTC场外<br>交易系统</p>
         </div>
         <div class="solution-middle-list  wow fadeInLeft" @click="goto('/solution/bibi')">
           <img src="../../assets/img/icon_2.png" alt="">
           <p>币币交易<br>系统</p>
         </div>
         <div class="solution-middle-list  wow fadeInRight" @click="goto('/solution/futures')">
           <img src="../../assets/img/icon_3.png" alt="">
           <p>期货交易<br>系统</p>
         </div>
         <div class="solution-middle-list  wow fadeInRight" @click="goto('/solution/robot')">
           <img src="../../assets/img/icon_4.png" alt="">
           <p>机器人</p>
         </div>

       </div>

     </div>

     <div class="solution-bottom-wrap">
       <div class="solution-bottom-title wow fadeInUp">
         <img src="../../assets/img/xiaoshu.png" alt="">
         <span>钱包系统解决方案</span>

       </div>
       <div class="solution-bottom-text wow fadeInUp">
         <span>去中心化钱包 &nbsp&nbsp |&nbsp&nbsp 中心化钱包</span>
       </div>
       <div class="solution-bottom-img wow fadeInUp">
         <img src="../../assets/img/jiejuefangan_pic_3.png" alt="">
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
    name: 'solution',

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
      height 21.84rem
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

      .solution-top-img
        width 18.53rem
        height 7.22rem
        //background white
        margin 2rem auto 0
        img
          width 100%
          height 100%
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
      height 26rem
      //background #C81623
      overflow hidden
      .solution-middle-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 2.06rem
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


      .solution-middle-img
        width 17.66rem
        height 11.66rem
        //background white
        margin 1.06rem auto 0
        img
          width 100%
          height 100%


      .solution-middle-lists
        width 100%
        height 6.69rem
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
          img
            width 2.5rem
            height 2.5rem
            margin 0.84rem auto 0.49rem
          p
            font-size:0.75rem;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:1.24rem;



    .solution-bottom-wrap
      width 100%
      height 25.88rem
      //background #C81623
      overflow hidden
      .solution-bottom-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        margin-top 1.81rem
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


      .solution-bottom-text
        margin 1.5rem auto 0
        width 12rem
        display flex
        justify-content space-around
        //background white
        span
          font-size:0.75rem;
          font-weight:bold;
          color:rgba(0,255,223,1);
          line-height:0.94rem;
      .solution-bottom-img
        width 12.41rem
        height 12.22rem
        //background white
        margin 2rem auto 0
        img
          width 100%
          height 100%
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
