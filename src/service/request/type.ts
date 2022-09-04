import { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface MdRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responeInterceptors?: (res: AxiosResponse) => AxiosResponse
  responeInterceptorsCatch?: (err: any) => any
}

export interface MdConfig extends AxiosRequestConfig {
  interceptors?: MdRequestInterceptors
}
