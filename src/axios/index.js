import Vue from 'vue'
//引入框架
import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://172.16.0.62:8082/',
    timeout: 50000

  })
  //2.axios的拦截器
  //   2.1拦截请求
  instance.interceptors.request.use(config => {
    // console.log('请求拦截');
    return config
  }, err => {
    console.log(err);
  })
  // 2.2拦截响应
  instance.interceptors.response.use(res => {
    // console.log('响应拦截');
    return res.data
  }, err => {
    console.log(err);
  })


  //3.发送真正的网络请求
  return instance(config)
}
