
const urls = {
  server :{
    // development: 'http://47.97.198.80:8080/power',
    development: 'http://47.97.198.80:8080/power',
    production: 'http://47.97.198.80:8080/power'
  },
  //获取资讯
  informationApi: {
    url: '/news/list/1'
  },
  //获取公告
  announcementApi: {
    url: '/news/list/2'
  },
  //获取链动资讯
  chainsApi: {
    url: '/news/list/3'
  },
  //获取学堂
  schoolApi: {
    url: '/news/list/4'
  },
  //获取热门资讯
  hotInformationApi: {
    url: '/news/list/hot'
  },
  //根据id获取详情
  detailApi: {
    url: '/news/details/:id'
  }
}

export {urls}
