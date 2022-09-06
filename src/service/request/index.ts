import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { MdRequestInterceptors, MdConfig } from './type'
import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true

class MDRequest {
  instance: AxiosInstance
  interceptors?: MdRequestInterceptors
  loading?: any
  showLoading?: boolean
  constructor(config: MdConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: '正在加载数据',
            background: 'rgba(0,0,0,0.5)'
          })
        }
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
        this.loading?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('request failed')
        } else {
          return data
        }
      },
      (err) => {
        console.log(err)
        this.loading?.close()
        if (err.response.status === 404) {
          console.log('404 error')
        }
        return err
      }
    )
  }

  request<T>(config: MdConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }

      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responeInterceptors) {
            res = config.interceptors.responeInterceptors(res)
          }
          this.showLoading = false
          resolve(res)
        },
        (err) => {
          this.showLoading = false
          reject(err)
          return err
        }
      )
    })
  }

  get<T>(config: MdConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: MdConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: MdConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default MDRequest
