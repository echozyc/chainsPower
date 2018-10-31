
const urls = {
  server :{
    development: 'http://192.168.1.186:8080/power',
    production: 'http://192.168.1.186:8080/power'
    // production: 'http://47.97.198.80:8080/power'
  },
  //获取资讯
  informationApi: {
    url: '/news/list/1'
  },
  //获取公告
  announcementApi: {
    url: '/news/list/2'
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
