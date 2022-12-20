import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  timeout: 5000
})
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})
service.interceptors.response.use((config) => {
  return config
}, (error) => {
  // 将可能出现的错误交给响应拦截器处理
  ElMessage({
    message:error.response.data,
    type:'error'
  })
  return Promise.reject(error)
})
export default service
