<template>
    <div class="header-wrap">
      <div class="logo">
        <img src="../assets/img/logo@2x.png" alt="">
      </div>
      <div class="right">
        <span @click="golang()">English</span>
        <span class="m">|</span>
        <div class="touch" @touchstart="show()">

          <img src="../assets/img/guanbi.png" alt="" class="img2" v-if="choiceShow && message">
          <img src="../assets/img/ico_mulu@2x.png" alt="" v-else>
        </div>
      </div>
      <transition name="fade">
        <div class="choice" v-if="choiceShow && message">

        <div class="list" @click="goto('/home')"><span :class="{on:isCurrent('/home')}">首页</span></div>

        <div class="list" @click="goto('/solution')" ><span :class="{on:isCurrent('/solution')}">解决方案</span></div>

        <div class="list" @click="goto('/eosdapp')" ><span :class="{on:isCurrent('/eosdapp')}">EosDapp</span></div>

        <div class="list" @click="goto('/promote')" ><span :class="{on:isCurrent('/promote')}">全案推广</span></div>

        <div class="list" @click="liandong()"><span>链动云</span></div>

        <div class="list" @click="goto('/information')"><span :class="{on:isCurrent('/information')}">资讯动态</span></div>
      </div>
      </transition>

      <!--<div class="layerWrap" v-show="showLayer">-->
        <!--<div class="listsWrap">-->
          <!--<div class="lists">-->
            <!--<div class="list" @click="goto('/home')"><span :class="{on:isCurrent('/home')}">首页</span></div>-->

          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
</template>
<script>
    export default {
      name: 'headers',

      props: {
        //子组件传过来的 是否点击蒙层消失
        message: Boolean
      },

      data() {
        return {
          choiceShow: false,
          scrollTop: '',
          showLayer: false
        }
      },

      methods: {

        //展示列表
        show() {
          this.choiceShow = !this.choiceShow
          this.$emit('showChoice',this.choiceShow)
          // this.showLayer = true
          // document.documentElement.style.overflow='hidden';

        },

        isCurrent(path) {
          return this.$route.path.search(path) === 0
        },

        goto(path) {
          this.$router.push(path)
          this.choiceShow = !this.choiceShow
          this.$emit('showChoice',this.choiceShow)

        },

        //页面滚动时 header样式改变
        handleScroll() {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          //console.log(scrollTop)
          if(scrollTop > 0) {
            document.getElementsByClassName('header-wrap')[0].classList.add('blue')
            // let arr = Array.prototype.slice.call(document.getElementsByClassName('liColor'))
            // arr.forEach((i) => {
            //   i.style.color = '#333333'
            // })
          } else if (scrollTop <= 0){
            document.getElementsByClassName('header-wrap')[0].classList.remove('blue')
          }
        },

        golang() {
          window.location.href = "http://mobile.chainsdir.com/en/";
        },

        liandong() {
          window.location.href = "http://www.usdt.net";
        }
      },

      mounted() {
        window.addEventListener('scroll',this.handleScroll)
      }


    }
</script>
<style scoped lang="stylus">
  .fade-enter-active, .fade-leave-active {
    transition: all 0.6s
    transform translateY(0)
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    /*opacity: 0;*/
    transform translateY(-100%)
  }


  .blue
    background linear-gradient(180deg,rgba(5,5,128,0.9),rgba(14,14,100,0.9));
  .header-wrap
    width 23.44rem
    height 3.2rem
    //background red
    position fixed
    top 0
    z-index 999
    transition all 0.5s;
    -moz-transition all 0.5s
    -webkit-transition all 0.5s
    -ms-transition all 0.5s
    -o-transition all 0.5s
    //overflow hidden
    .logo
      width 6.06rem
      height 1.2rem
      float left
      margin-top 1rem
      margin-left 1rem
      img
        width 100%
        height 100%
    .right
      width 5.78rem
      height 1rem
      float right
      margin-top 1.1rem
      margin-right 1rem
      display flex
      justify-content space-between
      position relative
      span
        font-size 0.75rem
        font-weight:500;
        color:rgba(255,255,255,1);
      .m
        margin 0 0.4rem
      .touch
        width 1.85rem
        height 1.72rem
        line-height 1.81rem
        float right
        margin-top -0.4rem
        //background #007aff
        text-align center
        img
          width 1.13rem
          height 0.72rem
          position absolute
          top 0.1rem
          right 0.5rem
        .img2
          width 1rem
          height 1rem
          top:0
          right 0.6rem
          z-index 1001
    .choice
        width 100%
        height 100%
        padding-top 3.2rem
        box-sizing border-box
        background: #101259
        /*position absolute*/
        /*top 3rem*/
        /*right 0.95rem*/
        /*padding 0 0.26rem*/
        /*box-sizing border-box*/
        /*overflow hidden*/
        /*z-index 999*/
        position fixed
        right 0


      .list
          width 100%
          height 2.78rem
          //border-bottom  1px solid rgba(238,238,238,1)
          /*text-align center*/
          line-height 2.78rem
          text-align center
          box-sizing border-box
          span
            font-size:0.94rem;
            font-weight:bold;
            color: #ffffff
          .on
            color rgb(0, 255, 255)



    .asideWrap
      width 6rem
      height 100%
      background white
      float right


  .layerWrap
    width 100%
    height 100%
    position fixed
    z-index 1000
    top 0
    left 0
    background rgba(0,0,0,0.8)
    .listsWrap
      width 10rem
      height 100%
      background rgba(255,255,255,1)
      float right
      .lists
        margin-top 4rem
        padding 0 2rem
        box-sizing border-box
        .list
          font-size 0.94rem
          color #333333
          font-weight 600

</style>
