<template>
    <div class="footer-wrap">
      <div class="footer-lists">
        <div class="footer-list" @touchstart="show(1)"><img src="../assets/img/qq@2x.png" alt=""></div>
        <div class="footer-list" @touchstart="show(2)"><img src="../assets/img/weixin@2x.png" alt=""></div>
        <div class="footer-list" @touchstart="show(3)"><img src="../assets/img/e-mail@2x.png" alt=""></div>
      </div>
      <div class="footer-text">
        <p>Copyright@Chainsdir.com 版权所有</p>
        <p>全国服务热线：+852 69569117</p>
      </div>
      <div class="chulai" v-show="showWrap === 1">
        <span>QQ: 3148846084</span>
      </div>
      <div class="chulai" v-show="showWrap === 2">

        <span>微信: ChainsPowerCloud</span>

      </div>
      <div class="chulai" v-show="showWrap === 3">

        <span>邮箱: support@chainsdir.com</span>
      </div>
    </div>
</template>
<script>
    export default {
        name: 'footers',

      data() {
         return {
           showWrap: '',
         }
      },

      methods: {
          show(i) {
            if(this.showWrap === i) {
              this.showWrap = ''
              return
            }
            this.showWrap = i
          }
      }
    }
</script>
<style scoped lang="stylus">
  gradient($a,$b) { //渐变
    background: linear-gradient(to left, $a, $b)
    background:-moz-linear-gradient(to left , $a, $b)
    background:-o-linear-gradient(to left , $a, $b)
    background: -webkit-gradient(linear,left top,right top,from($a),to($b))
  }
  .footer-wrap
    width 100%
    height 5.03rem
    //background red
    /*position absolute*/
    /*bottom 0*/
    /*z-index 99*/
    /*margin-top 1.5rem*/
    //overflow hidden
    position relative
    margin-top 1rem
    .footer-lists
      width 7.25rem
      height 1.25rem
      //background aqua
      margin 0.78rem auto 0
      .footer-list
        width 1.25rem
        height 1.25rem
        float left
        margin-left 1.75rem
        &:first-child
          margin-left 0
        img
          width 100%
          height 100%



    .footer-text
      p
        font-size:0.75rem
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:0.94rem;
        opacity:0.34;
        text-align center
        margin-top 0.3rem
        &:first-child
          margin-top 0.7rem

    .chulai
      width 12rem
      margin-left 4.5rem
      height 1.5rem
      line-height 1.5rem
      gradient(#2B58F5,#00CCFF)
      position absolute
      top -1.5rem
      border-radius 1rem
      text-align center
      span
        color #ffffff
        opacity 0.6
        font-size 0.75rem
        font-weight 500






</style>
