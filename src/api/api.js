import axios from 'axios'
import {urls} from './constants'

const jsonUrl = (json) => {
  let arr = []
  let str = ''
  for (let i in json) {
    str = i + '=' + json[i]
    arr.push(str)
  }
  return arr.join('&')
}

const fetch = (url,data,method,postHeaders) => {
  url = url.url
  if(url){
    for (let k in data){
      if(url.indexOf(':'+ k) !== -1){
        url = url.replace(':'+ k ,data[k])
        delete data[k]
      }
    }
  }

  let realUrl = urls.server[process.env.NODE_ENV] + url
  let type = method.toLowerCase()
  let res = {}
  if(type === 'get'){
    res = axios.get(realUrl + '?' + jsonUrl(data))
  } else if(type === 'post'){
    res = axios.post(realUrl,data,postHeaders)
  } else if(type === 'put') {
    res = axios.put(realUrl,data,postHeaders)
  }
  return res
}

const api = {}
//获取资讯
api.information = params => {
  return fetch (urls.informationApi,params,'get')
},

//获取公告
api.announcement = params => {
  return fetch (urls.announcementApi,params,'get')
}
//获取热门资讯
api.hotInformation = params => {
  return fetch (urls.hotInformationApi,params,'get')
}
//根据id获取详情
api.detail = params => {
  return fetch (urls.detailApi,params,'get')
}

export {api}

