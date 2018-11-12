<template>
    <div class="brand-wrap">
      <div class="brand-top">
        <div class="solution-top-title  wow fadeInUp">
          <img src="../../assets/img/xiaoshu.png" alt="">
          <span>提供白皮书全案策划</span>
        </div>

        <p class="text-title">
          品牌推广,让您的品牌覆盖互联网每个角落
        </p>

        <div class="brand-lists">
          <div class="list-top t1">
            <p class="top-title">
              品牌标识
            </p>
            <p class="top-text">
              品牌logo创意策划<br>
              及VI高端设计
            </p>
          </div>

          <div class="list-top t2">
            <p class="top-title">
              品牌宣传物料
            </p>
            <p class="top-text">
              吸粉海报创意策划及设计<br>
              吸粉易拉宝创意策划及设<br>
              计、吸粉文案撰写
            </p>

          </div>

          <div class="list-bottom">

          </div>

        </div>
      </div>




    </div>
</template>
<script>
    export default {
        name: 'brand'
    }
</script>
<style scoped lang="stylus">
  .brand-wrap
    width 100%
    height 116rem
    background #0E0F5B url("../../assets/img/beijing.png") no-repeat
    background-size 100%
    padding 0 1rem
    box-sizing border-box
    .brand-top
      width 100%
      height 32.78rem
      box-sizing border-box
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
</style>
