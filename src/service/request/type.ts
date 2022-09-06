import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface MdRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responeInterceptors?: (res: T) => T
  responeInterceptorsCatch?: (err: any) => any
}

export interface MdConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MdRequestInterceptors<T>
  showLoading?: boolean
}
