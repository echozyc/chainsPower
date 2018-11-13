<template>
   <div class="whitePaper-wrap">
     <div class="top">
       <div class="top-title  wow fadeInUp">
         <img src="../../assets/img/xiaoshu.png" alt="">
         <span>白皮书服务，让您的产品脱颖而出</span>
       </div>

       <p class="text-title">
         一站式金牌服务保驾护航
       </p>

       <div class="top-lists">
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_1.png" alt="">
           <p>市场调研<br>
             分析</p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_2.png" alt="">
           <p>价值生态<br>
             设计
           </p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_3.png" alt="">
           <p>产业链生<br>
             态设计</p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_4.png" alt="">
           <p>技术应用<br>
             设计</p>
         </div>

         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_5.png" alt="">
           <p>发展规划<br>
             设计</p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_6.png" alt="">
           <p>团队成员<br>
             包装</p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_7.png" alt="">
           <p>基金会<br>
             包装</p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_8.png" alt="">
           <p>Token分配<br>
             设计 </p>
         </div>

         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_9.png" alt="">
           <p>技术架构<br>
             设计</p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_10.png" alt="">
           <p>应用架构<br>
             设计</p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_11.png" alt="">
           <p>形象设计<br>
             服务</p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_12.png" alt="">
           <p>ERC 2.0代<br>
             币发行</p>
         </div>

         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_13.png" alt="">
           <p>基金使用<br>
             计划</p>
         </div>
         <div class="top-list">
           <img src="../../assets/img/ico_baipishu_14.png" alt="">
           <p>白皮书<br>
             翻译</p>
         </div>

       </div>

     </div>
     <div class="bottom">
       <div class="bottom-title  wow fadeInUp">
         <img src="../../assets/img/xiaoshu.png" alt="">
         <span>专业服务流程</span>
       </div>

       <p class="text-title">
         链动科技提供一对一的贴心服务
       </p>

       <div class="bottom-lists">
         <div class="swiper-container c1">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <div class="list">
                 <img src="../../assets/img/ico_fuwu_1.png" alt="">
                 <p class="title">发布需求</p>
                 <p class="text">了解需求后，深<br>入了解讨论相关<br>信息</p>
                 <img src="../../assets/img/xiayibu.png" alt="" class="next">
               </div>
             </div>
             <div class="swiper-slide">
               <div class="list">
                 <img src="../../assets/img/ico_fuwu_22.png" alt="">
                 <p class="title">沟通策划</p>
                 <p class="text">根据沟通结果着<br>手策划提供方案</p>
                 <img src="../../assets/img/xiayibu.png" alt="" class="next">
               </div>
             </div>
             <div class="swiper-slide">
               <div class="list">
                 <img src="../../assets/img/ico_fuwu_33.png" alt="">
                 <p class="title">完美呈现</p>
                 <p class="text">修改至满意为止<br>并以精美效果呈<br>现</p>
                 <img src="../../assets/img/xiayibu.png" alt="" class="next">
               </div>
             </div>
             <div class="swiper-slide">
               <div class="list">
                 <img src="../../assets/img/ico_fuwu_44.png" alt="">
                 <p class="title">成功交付</p>
                 <p class="text">客户验收后完成<br>交付合作成功</p>
               </div>
             </div>
           </div>
         </div>
       </div>

       <footers></footers>

     </div>

   </div>
</template>
<script>
  import Swiper from 'swiper';
  import {WOW} from 'wowjs'
  import footers from '../../components/footers'
    export default {
      name: 'whitepaper',

      components: {
        footers
      },

      methods: {
        //swiper init
        swiperInit() {
          var swiper = new Swiper('.c1', {
            pagination: '.swiper-pagination',
            slidesPerView: 2.5,
            paginationClickable: true,
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
  .whitePaper-wrap
    width 100%
    //height 79.13rem
    background #0E0F5B url("../../assets/img/beijing.png") no-repeat
    background-size 100%
    box-sizing border-box
    .top
      width 100%
      height 41.16rem
      //background #C81623
      padding 0 1rem
      box-sizing border-box
      overflow hidden
      .top-title
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


      .text-title
        font-size:0.88rem;
        font-weight:800;
        margin-top 0.91rem
        margin-left 2.6rem
        color:rgba(0,255,223,1);
        line-height:0.81rem;
      .top-lists
        margin-top 1.5rem
        .top-list
          width 5.18rem
          height 6.69rem
          background:rgba(13,52,164,1);
          border-radius:0.3rem;
          text-align center
          float left
          margin-top 0.25rem
          margin-right 0.23rem
          &:nth-child(4n)
            margin-right 0
          img
            width 2.34rem
            height 2.34rem
            margin 1rem auto 0.56rem
          p
            font-size:0.75rem;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:0.94rem;

    .bottom
      .bottom-title
        width 100%
        height 1.84rem
        line-height 1.84rem
        //background aqua
        //margin-top 4.96rem
        padding-left 1rem
        box-sizing border-box
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
          left 3.4rem


      .text-title
        font-size:0.88rem;
        font-weight:800;
        margin-top 0.91rem
        margin-left 3.6rem
        color:rgba(0,255,223,1);
        line-height:0.81rem;
      .bottom-lists
        width 100%
        height 10.31rem
        margin-top 1.72rem
        margin-bottom 4rem
        //background #00ffdf
        .list
          width 7.5rem
          height 10.31rem
          background:rgba(13,52,164,1);
          border-radius:1rem;
          margin 0 auto
          text-align center
          position relative
          img
            width 3.13rem
            height 3.13rem
            margin 1.31rem auto 0.69rem
          .title
            font-size:0.94rem;
            font-weight:bold;
            color:rgba(0,255,223,1);
            line-height:0.97rem;
          .text
            font-size:0.75rem;
            margin-top 0.59rem
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:0.94rem;
          .next
            width 1.19rem
            height 0.81rem
            position absolute
            top 3.3rem
            right -1.5rem


</style>
