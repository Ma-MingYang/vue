import axios from "axios";
// import qs from "qs";

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = true // 携带session信息

/***
 * 实现请求重试
 */
axios.defaults.retry = 1;
axios.defaults.retryDelay = 1000
axios.defaults.shouldRetry = (error) => true; //重试条件，只要是错误都要重试
const ApiUrl = ''

export let get=function(url, params = {}) {
  return new Promise((res, rej) => {
    axios.get(ApiUrl + url, {
      params: params
    }).then(response => {
      res(response.data)
    }).catch(error => {
      rej(err)
    })
  })
}


export let post=function(url,data={}){
    return new Promise((res,rej)=>{
        axios.post(ApiUrl+url,data)
        .then(response=>{
            res(response.data);
        }).catch(err=>{
            rej(err)
        })
    })
}

 
