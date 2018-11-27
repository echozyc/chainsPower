<template>
    <div class="information-content wow fadeInUp">
      <div class="information-list" v-for="(i) in information"  @click="detailContent(i.id)">
        <div class="infotmation-img">
          <img :src="i.mainImgAbsolute" alt="">
        </div>
        <div class="information-text">
          <p class="title">{{i.title}}111</p>
          <div class="content-wrap">
            <p class="content">{{i.abstracts}}</p>
          </div>
          <p class="time">{{i.createTime}}</p>
        </div>
      </div>
      <!--<li v-for="item in list">{{ item }}</li>-->
    </div>
</template>
<script>
  import {WOW} from 'wowjs'
  import {api} from '../../api/api'
  import {url} from '../../api/constants'
  export default {
    name: 'lists',

    data() {
      return {
        information: '',
      }
    },

    methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
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
      },

      //获取资讯列表
      async getInformation() {
        let res = await api.information({
        })
        this.information = res.data.data.list
        console.log(this.information)
      },

      //进去详情页 传参数对应id值
      detailContent(id) {
        this.id = id
        this.$router.push({
          path: '/information/detail',
          query: {
            id: id
          }
        })
      },
    },

    mounted() {
      this.wow()
      this.getInformation()
    }

  }
</script>
<style scoped lang="stylus">
  .information-title
    position relative
    width 100%
    height 2.75rem
    line-height 2.75rem
    background:rgba(11,11,109,1);
    border-radius:0.3rem;
    //margin-top 6.28rem
    padding 0 2rem
    box-sizing border-box
    display flex
    justify-content space-around
    span
      font-size:0.94rem;
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(255,255,255,0.5)
    /*.on*/
    /*color #0ff*/
    .img
      width 10.13rem
      height 4.34rem
      position absolute
      top -4rem
      right 0
      img
        width 100%
        height 100%


  .information-content
    margin-bottom 6rem
    .information-list
      width 100%
      height 6.84rem
      border-bottom 0.5px solid rgba(255,255,255,0.2);
      padding 0.63rem 0
      box-sizing border-box
      .infotmation-img
        width 8.44rem
        height 5.63rem
        background #22208D
        float left
        text-align center
        overflow hidden
        img
          width auto
          height 100%
          margin 0 auto
      .information-text
        float right
        width 11.89rem
        height 100%
        //background #00f6ff
        .title
          font-size:1.04rem;
          font-weight:bold;
          color:rgba(255,255,255,1);
          line-height:1.5rem;
          margin-bottom 0.6rem
          overflow: hidden;
          text-overflow:ellipsis;//文本溢出显示省略号
          white-space:nowrap;//文本不会换行（单行文本溢出）
        .content-wrap
          width 100%
          height 2.3rem
          overflow hidden
          .content
            font-size:0.95rem;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:1.13rem;
            opacity:0.6;
            overflow: hidden;
            text-overflow:ellipsis;//文本溢出显示省略号
            white-space:nowrap;//文本不会换行（单行文本溢出）
        .time
          font-size:0.75rem;
          font-weight:400;
          color:rgba(255,255,255,255);
          line-height:0.63rem;
          opacity:0.6;
          margin-top 0.4rem

</style>
