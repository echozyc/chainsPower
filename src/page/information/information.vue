<template>
    <div class="information-wrap">
      <div class="information-title wow fadeInDown">
        <span @touchstart="choice1()" id="s1" style="color:#0ff">资讯</span>
        <span>|</span>
        <span @touchstart="choice2()" id="s2">公告</span>
        <div class="img">
          <img src="../../assets/img/zicun_pic_1.png" alt="">
        </div>
      </div>

      <div class="information-content wow fadeInUp" v-show="showList"
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
        <div class="information-list" v-for="(i) in information"  @click="detailContent(i.id)">
          <div class="infotmation-img">
            <img :src="i.mainImgAbsolute" alt="">
          </div>
          <div class="information-text">
            <p class="title">{{i.title}}</p>
            <div class="content-wrap">
              <p class="content">{{i.abstracts}}</p>
            </div>
            <p class="time">{{i.createTime}}</p>
          </div>

        </div>
        <!--<li v-for="item in list">{{ item }}</li>-->
      </div>

      <div class="information-textWrap wow fadeInUp" v-show="showContent">
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






      <footers id="f"></footers>

    </div>
</template>
<script>

  import {WOW} from 'wowjs'
  import footers from '../../components/footers'
  import {api} from '../../api/api'
  import {url} from '../../api/constants'
  export default {
    name: 'information',

    data() {
      return {
        information: '',

        showList: true,
        showContent: false,

        id:'',
        detail: '',

        list: [1,2,3,4,5]
      }
    },

    components: {
      footers
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



      // init Height 最小高度
      initHeight() {
        let height = document.body.clientHeight
        let infor = document.getElementsByClassName('information-wrap')[0]
        infor.style.minHeight = height + 'px'

        //内容不够高度时 底部定位
        if(infor.clientHeight === height) {
          document.getElementById('f').classList.add('on')
        } else if(infor.style.height > height) {
          document.getElementById('f').classList.remove('on')
        }
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

      //获取公告列表
      async getAnnouncement() {
        let res = await api.announcement({
        })
        this.information = res.data.data.list
      },

      //点击资讯
      choice1() {
        this.information = ''
        document.getElementById('s1').style.color = '#0ff'
        document.getElementById('s2').style.color = 'rgba(255,255,255,0.5)'
        this.getInformation()
        this.showList = true
        this.showContent = false
      },

      //点击公告
      choice2() {
        this.information = ''
        document.getElementById('s2').style.color = '#0ff'
        document.getElementById('s1').style.color = 'rgba(255,255,255,0.5)'
        this.getAnnouncement()
        this.showList = true
        this.showContent = false
      },

      //进去详情页 传参数对应id值
      detailContent(id) {
        this.detail = ''
        this.id = id
        this.showList = false
        this.showContent = true
        window.scrollTo(0,0);
        this.getDetail()
      },

      //获取资讯详情
      async getDetail() {
        let res = await api.detail({
          id: this.id,
        })
        this.detail = res.data.data
      },


    },

    mounted() {
      this.initHeight()
      this.wow()
      this.getInformation()
      this.loadMore()
    }
  }
</script>
<style scoped lang="stylus">
  .load-more-normal {
    text-align: center;
    height: 60px;
    line-height: 60px;
  }

  .load-more-hide {
    height: 0;
  }



  .information-wrap
    width 100%
    //height 40rem
    //min-height 100%
    background #0E0F5B url("../../assets/img/beijing.png") no-repeat
    background-size 100%
    padding 6.28rem 1rem 0
    box-sizing border-box
    position relative
    overflow hidden
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
    .on
      position: absolute;
      bottom: 0;
      width 21.44rem
      //left: -0.5rem

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
