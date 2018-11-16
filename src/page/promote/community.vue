<template>
    <div class="community-wrap">

      <div class="solution-top-title  wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>社群策划</span>
      </div>

      <div class="top-lists">
        <div class="top-list wow fadeInUp an1">
          <img src="../../assets/img/icon-b.png" alt="">
          <p class="p1">互动引流</p>
          <p class="p2">多维度互动引流<br>
            营销永不掉线</p>
        </div>

        <div class="top-list wow fadeInUp an2">
          <img src="../../assets/img/icon-a.png" alt="">
          <p class="p1">告别信任痛点</p>
          <p class="p2">解决信任痛点<br>
            提升成交率</p>
        </div>

        <div class="top-list wow fadeInUp an3">
          <img src="../../assets/img/icon-c.png" alt="">
          <p class="p1">解决管理难题</p>
          <p class="p2">数据赋能生态<br>
            创新会员管理</p>
        </div>


      </div>

      <div class="solution-top-title  title2  wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>电报群孵化</span>
      </div>

      <div class="text-lists">
        <div class="text-list wow fadeInUp an1">
          <p class="pp">
            · 快速建设<span>5万区块链</span>种子用户的电报群，<br>帮助项目快速推广宣传
          </p>
        </div>

        <div class="text-list wow fadeInUp an2">
          <p>
            · 设计健全的社群管理方案，防止社群用户流失
          </p>
        </div>

        <div class="text-list wow fadeInUp an3">
          <p>
            · 策划社群话题，保证社群的活跃率提高用户转化
          </p>
        </div>

      </div>

      <div class="solution-top-title  title2  wow fadeInUp">
        <img src="../../assets/img/xiaoshu.png" alt="">
        <span>社群孵化服务</span>
      </div>

      <div class="text-lists t2">
        <div class="text-list wow fadeInUp an1">
          <p class="pp">
            · 资快速建设50个区块链社群志愿者，保<br>证社群每天宣传效果
          </p>
        </div>

        <div class="text-list wow fadeInUp an2">
          <p>
            · 每个志愿者建立200~500人的社群，提升品牌曝光率
          </p>
        </div>

        <div class="text-list wow fadeInUp an3">
          <p>
            · 可视化数据管理，通过数据驱动社群发展
          </p>
        </div>

      </div>

      <footers></footers>

    </div>
</template>
<script>
  import {WOW} from 'wowjs'
  import footers from '../../components/footers'
    export default {
      name: 'community',

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

  .community-wrap
    width 100%
    //height 116rem
    background #0E0F5B url("../../assets/img/beijing.png") no-repeat
    background-size 100%
    padding 0 1rem
    box-sizing border-box
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


    .top-lists
      width 100%
      height 10.31rem
      //background #00ccff
      margin-top 1.28rem
      display flex
      justify-content space-between
      .top-list
        width 6.88rem
        height 10.31rem
        border:0.3px solid rgba(123,120,187,1);
        text-align center
        img
          width 5rem
          height 3.13rem
          margin-top 1.28rem
        .p1
          font-size:0.94rem;
          font-weight:bold;
          color:rgba(0,255,223,1);
          line-height:1.5rem;
          margin 0.6rem 0 0.6rem
        .p2
          font-size:0.75rem;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:1.13rem;
    .title2
      margin-top 2.78rem
    .text-lists
      width 20.31rem
      margin 1.03rem auto 0
      .text-list
        width 100%
        height 2.97rem
        line-height 2.97rem
        background:rgba(13,52,164,1);
        border-radius:0.3rem;
        text-align center
        margin-top 0.63rem
        overflow hidden
        p
          font-size:0.75rem;
          font-weight:500;
          color:rgba(255,255,255,1);
          //line-height:1.13rem;
          span
            color #03F7DC
        .pp
          line-height:1rem;
          margin-top 0.5rem


    .t2
      margin-bottom 4rem
</style>
