import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
import MdRequest from './service'
import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/es/components/loading/style/css'

interface DataType {
  data: any
  origin: string
  url: string
}
MdRequest.request<DataType>({
  url: '/post',
  method: 'POST',
  showLoading: true,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('单独请求的拦截')
      return config
    },
    responeInterceptors: (res) => {
      console.log('单独的响应拦截')
      return res
    }
  }
}).then((res) => {
  console.log(res.url)
  console.log(res.origin)
})
const app = createApp(App)
// registerApp(app)
app.use(registerApp)

app.use(store).use(router).mount('#app')
