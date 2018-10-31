<template>
    <div class="header-wrap">
      <div class="logo">
        <img src="../assets/img/logo@2x.png" alt="">
      </div>
      <div class="right">
        <span>English</span>
        <span class="m">|</span>
        <div class="touch" @touchstart="show()">
          <img src="../assets/img/ico_mulu@2x.png" alt="">
        </div>
      </div>
       <div class="choice" v-show="choiceShow && message">
        <div class="list" @click="goto('/home')"><span :class="{on:isCurrent('/home')}">首页</span></div>
        <div class="list" @click="goto('/solution')" ><span :class="{on:isCurrent('/solution')}">解决方案</span></div>
        <div class="list" @click="goto('/information')"><span :class="{on:isCurrent('/information')}">资讯动态</span></div>
      </div>
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
          scrollTop: ''
        }
      },

      methods: {
        //展示列表
        show() {
          this.choiceShow = !this.choiceShow
          this.$emit('showChoice',this.choiceShow)
          console.log(this.choiceShow)
          //如果弹出层出现 页面禁止滚动
          // if(this.choiceShow === true) {
          //
          // } else if(this.choiceShow === false) {
          //
          // }
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
        }
      },

      mounted() {
        window.addEventListener('scroll',this.handleScroll)
      }


    }
</script>
<style scoped lang="stylus">
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
    .choice
        width 6.25rem
        height 8.5rem
        background:rgba(255,255,255,1);
        border-radius:0.5rem;
        position absolute
        top 3rem
        right 0.95rem
        padding 0 0.26rem
        box-sizing border-box
        overflow hidden
        z-index 999
        .list
          width 100%
          height 2.78rem
          border-bottom  1px solid rgba(238,238,238,1)
          text-align center
          line-height 2.78rem
          span
            font-size:0.94rem;
            font-weight:bold;
            color:rgba(51,51,51,1);
          .on
            color #0E0F5B






</style>
