import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { MdRequestInterceptors, MdConfig } from './type'

class MDRequest {
  instance: AxiosInstance
  interceptors?: MdRequestInterceptors
  constructor(config: MdConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responeInterceptors,
      this.interceptors?.responeInterceptorsCatch
    )

    // 每个实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例的请求拦截器')
        return config
      },
      (err) => {
        console.log(err)
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例的响应拦截器')
        return res
      },
      (err) => {
        console.log(err)
        return err
      }
    )
  }

  request(config: MdConfig): void {
    if (config.interceptors?.requestInterceptors) {
      config = config.interceptors.requestInterceptors(config)
    }

    this.instance.request(config).then((res) => {
      if (config.interceptors?.responeInterceptors) {
        res = config.interceptors.responeInterceptors(res)
      }
      console.log('res', res)
    })
  }
}

export default MDRequest
