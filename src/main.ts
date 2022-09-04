import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
import MdRequest from './service'

MdRequest.request({
  url: '/get',
  method: 'GET',
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
})
const app = createApp(App)
// registerApp(app)
app.use(registerApp)

app.use(store).use(router).mount('#app')
