<template>
   <div class="under-wrap">
     <div class="under-top">
       <div class="under-title wow fadeInUp">
         <img src="../../../assets/img/xiaoshu.png" alt="">
         <span>企业级区块链底层链</span>

       </div>
       <div class="under-text wow fadeInUp">
         <span>企业级区块链底层链，致力于打造最具易用性的区块链基础工具。基于区块链底层技术特性，通过安全可靠的去中心化信任机制、
           高效稳健的系统性能，贴合所需的行业场景，便捷地部署基础链、智能合约，快速落地区块链应用及搭建区块链商业生态。
           为您提供安全、高效、低成本的区块链应用基础设施。</span>
       </div>
       <div class="under-list wow fadeInLeft">
         <p>应用层</p>
         <div class="under-list-imgs">
           <div class="under-list-img" @click="goto('/solution/szsc')">
             <img src="../../../assets/img/yingyongceng_icon_1.png" alt="">
             <p>数字商城</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/cpsy')">
             <img src="../../../assets/img/yingyongceng_icon_5.png" alt="">
             <p>产品溯源</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/gyljr')">
             <img src="../../../assets/img/yingyongceng_icon_8.png" alt="">
             <p class="sp">供应链<br>金融</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/jcyc')">
             <img src="../../../assets/img/yingyongceng_icon_2.png" alt="">
             <p>竞猜预测</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/qklyx')">
             <img src="../../../assets/img/yingyongceng_icon_3.png" alt="">
             <p class="sp">区块链<br>游戏</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/wlw')">
             <img src="../../../assets/img/yingyongceng_icon_9.png" alt="">
             <p>物联网</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/htcz')">
             <img src="../../../assets/img/yingyongceng_icon_11.png" alt="">
             <p>合同存证</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/xxaq')">
             <img src="../../../assets/img/yingyongceng_icon_7.png" alt="">
             <p>信息安全</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/gycs')">
             <img src="../../../assets/img/yingyongceng_icon_6.png" alt="">
             <p>公益慈善</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/dsjrgzn')">
             <img src="../../../assets/img/yingyongceng_icon_10.png" alt="">
             <p class="sp">大数据人<br>工智能</p>
           </div>
           <div class="under-list-img" @click="goto('/solution/jflm')">
             <img src="../../../assets/img/yingyongceng_icon_11.png" alt="">
             <p>积分联盟</p>
           </div>

         </div>
       </div>
       <div class="under-list wow fadeInLeft">
         <p>服务层</p>
         <div class=" under-list-sp">
           <div class="under-list-img">
             <img src="../../../assets/img/fuwuceng_icon_1.png" alt="">
             <p>数字资产</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/fuwuceng_icon_2.png" alt="">
             <p class="sp">区块链<br>浏览器</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/fuwuceng_icon_3.png" alt="">
             <p class="sp">应用API<br>接口</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/fuwuceng_icon_4.png" alt="">
             <p class="sp">节点客<br>户端</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/fuwuceng_icon_5.png" alt="">
             <p>钱包</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/fuwuceng_icon_6.png" alt="">
             <p class="sp">开发者<br>文档</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/fuwuceng_icon_7.png" alt="">
             <p>监控</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/fuwuceng_icon_8.png" alt="">
             <p class="sp">智能合约<br>脚本工具</p>
           </div>
         </div>
       </div>
       <div class="under-list wow fadeInLeft">
         <p>底层</p>
         <div class=" under-list-sp">
           <div class="under-list-img">
             <img src="../../../assets/img/diceng_icon_1.png" alt="">
             <p>共识算法</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/diceng_icon_2.png" alt="">
             <p>加密算法</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/diceng_icon_3.png" alt="">
             <p>智能合约</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/diceng_icon_4.png" alt="">
             <p>权限管理</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/diceng_icon_5.png" alt="">
             <p>存储机制</p>
           </div>
           <div class="under-list-img">
             <img src="../../../assets/img/diceng_icon_6.png" alt="">
             <p>通讯协议</p>
           </div>
         </div>
       </div>


     </div>

     <div class="under-bottom">
       <div class="under-bottom-title wow fadeInUp">
         <img src="../../../assets/img/xiaoshu.png" alt="">
         <span>核心优势</span>
       </div>
       <div class="under-bottom-lists">
         <div class="under-bottom-list wow fadeInUp">
           <img src="../../../assets/img/youshi_ico_1.png" alt="">
           <span>安全</span>
         </div>
         <div class="under-bottom-list wow fadeInUp">
           <img src="../../../assets/img/youshi_ico_2.png" alt="">
           <span>成本</span>
         </div>
         <div class="under-bottom-list wow fadeInUp">
           <img src="../../../assets/img/youshi_ico_3.png" alt="">
           <span>便捷</span>
         </div>
         <div class="under-bottom-list wow fadeInUp">
           <img src="../../../assets/img/youshi_ico_4.png" alt="">
           <span>易用</span>
         </div>
         <div class="under-bottom-list wow fadeInUp">
           <img src="../../../assets/img/youshi_ico_5.png" alt="">
           <span>灵活</span>
         </div>
         <div class="under-bottom-list wow fadeInUp">
           <img src="../../../assets/img/youshi_ico_6.png" alt="">
           <span>性能</span>
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
    name: 'underlying',

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
  .under-wrap
    width 100%
    //height 71.81rem
    background #0E0F5B url("../../../assets/img/beijing.png") no-repeat
    background-size 100%
    padding 0 1rem
    box-sizing border-box
    .under-top
      width 100%
      //height 48rem
      //background #C81623
      overflow hidden
      .under-title
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
          top -1.8rem
          left 2.8rem
      .under-text
        margin-top 1.72rem
        span
          font-size:0.75rem;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:1.13rem
      .under-list
         margin-top 1.59rem
         overflow hidden
         >p
           font-size:0.94rem;
           font-weight:bold;
           color:rgba(0,255,223,1);
           line-height:1.5rem;
        .under-list-imgs
          .under-list-img
            float left
            margin-right 0.22rem
            width 5.18rem
            height 6.69rem
            background #0D34A4
            border-radius 0.3rem
            margin-top 0.28rem
            text-align center
            &:nth-child(4n)
              margin-right 0
            img
              width 2.34rem
              height 2.34rem
              margin 1rem auto 0
            p
              font-size 0.75rem
              font-weight 500
              color #ffffff
              margin-top 1rem
            .sp
              margin-top 0.5rem
        .under-list-sp
          .under-list-img
            float left
            margin-right 0.22rem
            width 5.18rem
            height 6.69rem
            border 1px solid rgba(123,120,187,0.5);
            box-sizing border-box
            border-radius 0.3rem
            margin-top 0.28rem
            text-align center
            &:nth-child(4n)
              margin-right 0
            img
              width 2.34rem
              height 2.34rem
              margin 1rem auto 0
            p
              font-size 0.75rem
              font-weight 500
              color #ffffff
              margin-top 1rem
            .sp
              margin-top 0.5rem





    .under-bottom
      width 100%
      height 16rem
      //background darkblue
      margin-top 3.25rem
      margin-bottom 2rem
      /*overflow hidden*/
      .under-bottom-title
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


      .under-bottom-lists
        .under-bottom-list
          float left
          margin 0 1.9rem
          width 3.31rem
          height 5.35rem
          //background lemonchiffon
          text-align center
          margin-top 1.34rem
          img
            width 100%
            height 3.78rem
            margin-bottom 0.3rem
          span
            font-size:0.94rem;
            font-weight:bold;
            color:rgba(0,255,223,1);
            line-height:1.5rem;



</style>
