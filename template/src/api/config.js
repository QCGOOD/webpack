import axios from 'axios';

import router from '../router/index'
axios.defaults.timeout = 60000; //响应时间
//  自行配置
//  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
//  axios.defaults.baseURL = process.env.NODE_API;

axios.interceptors.response.use((success) => {
  console.log('请求发送到了后台')
  if (success.data.code == 20000) {
    console.log('真正的业务操作成功')
    return Promise.resolve(success);
  } else {
    console.warn(`业务遇到了问题，错误码：${success.data.code}；错误信息：${success.data.message}`)
    return Promise.reject(success);
  };
}, (error) => {
  console.log('全是服务器的问题')
  return Promise.reject(error);
});

export default {
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        })
    })
  },
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: params })
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        })
    })
  }
}