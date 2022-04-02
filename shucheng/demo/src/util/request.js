// 导入全局计出地址
import env from "../../env.js"
// 导入axios
import axios from 'axios'
// 5.建一个axios实例 书写配置项
var services=axios.create({
    baseURL: env.baseUrl,
    timeout:5000//规定请求超时时间是5秒
})
// 请求拦截器 配置一些访问后台的条件
services.interceptors.request.use((config)=>{
    return config
},(err)=>{
    //跨域
    console.log(err,'请求失败信息')
    return Promise.reject(err)
})


//8.导出axios实例对象
export default services