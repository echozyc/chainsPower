<template>
  <div class="information-textWrap wow fadeInUp">
    <div class="text-wrap">
      <div class="text-title">
        <span>{{detail.title}}</span>
      </div>
      <p class="introduce">
        <span>{{detail.createTime}}</span>
        <span>来源：{{detail.author}}</span>
      </p>
      <div class="content">
        <p v-html="detail.content"></p>
      </div>
    </div>
  </div>
</template>
<script>
  import {WOW} from 'wowjs'
  import {api} from '../../api/api'
  import {url} from '../../api/constants'
  export default {
    name: 'detail',

    metaInfo() {
      return {
        title: this.detail.title,
        // 这里定义titleTemplate会覆盖App.vue中的定义
        // titleTemplate: this.detail.title,
        // meta: [
        //   { name: 'description', itemprop: "description", content: this.detail.abstracts},
        // ]
      }
    },

    data() {
      return {
        id: '',
        detail: ''
      }
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

      //获取资讯详情
      async getDetail() {
        let res = await api.detail({
          id: this.id,
        });
        console.log(res.data.data)
        this.detail = res.data.data

      },

    },

    mounted() {
     this.id = this.$route.query.id;
     this.wow();
     this.getDetail();
    }
  }
</script>
<style scoped lang="stylus">
  .information-textWrap
    margin-bottom 13rem
    .text-wrap
      width 100%
      /*height 30rem*/
      //background #ffffff
      .text-title
        height 3.06rem
        line-height 3.06rem
        width 100%
        //background white
        text-align center
        border-bottom:0.3px solid rgba(255,255,255,0.4);
        box-sizing border-box
        overflow: hidden;
        text-overflow:ellipsis;//文本溢出显示省略号
        white-space:nowrap;//文本不会换行（单行文本溢出）
        span
          font-size:0.94rem;
          font-weight:bold;
          color:rgba(0,255,223,1);
      .introduce
        text-align center
        margin 0.9rem 0
        span
          margin 0 1rem
          font-size:0.69rem;
          font-weight:400;
          color:rgba(255,255,255,1);
          line-height:0.63rem;
          opacity:0.6;
      .content
        margin-bottom 7rem
        p
          font-size:0.75rem;
          font-weight:500;
          color:rgba(255,255,255,1);
          line-height:1.13rem;




</style>
