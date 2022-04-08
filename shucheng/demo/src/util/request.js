// // 导入全局计出地址
// import env from "../../env.js"
// // 导入axios
// import axios from 'axios'
// // 5.建一个axios实例 书写配置项
// var services=axios.create({
//     baseURL: env.baseUrl,
//     timeout:5000//规定请求超时时间是5秒
// })
// // 请求拦截器 配置一些访问后台的条件
// services.interceptors.request.use((config)=>{
//     return config
// },(err)=>{
//     //跨域
//     console.log(err,'请求失败信息')
//     return Promise.reject(err)
// })


// //8.导出axios实例对象
// export default services
// // 导入全局计出地址
import env from "../../env.js"
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/util/auth'

// create an axios instance
const service = axios.create({
  baseURL: env.baseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 0, it is judged as an error.
    if (res.code !== 0) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 1 * 1000
      })

    } else {
      return res
    }
  },
  error => {
    console.log( {error}) // for debug
    Message({
      message: error.response.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
