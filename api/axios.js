import Axios from 'axios'
import { formatParams } from '@/utils/index.js'

const axios = Axios.create({
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  },
  baseURL: process.env.BASE_URL,
  timeout: 10000
})

// api接口全局请求拦截器， 用于发送ajax时格式化空参数
axios.interceptors.request.use(function (config) {
  // 格式化参数
  if (config.method === 'get') {
    config.params = formatParams(config.params)
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

// api接口全局响应拦截器，用于转换错误提示信息
axios.interceptors.response.use(function (response) {
  if (!/application\/json/.test(response.headers['content-type'])) {
    return response
  }

  return response
}, function (error) {
  return Promise.reject(error)
})

export default axios
