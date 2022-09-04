import MdRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const MDRequest = new MdRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('实例的请求拦截')
      return config
    },
    requestInterceptorsCatch(err) {
      return err
    },
    responeInterceptors: (res) => {
      console.log('实例的响应拦截')
      return res
    },
    responeInterceptorsCatch(err) {
      return err
    }
  }
})

export default MDRequest
