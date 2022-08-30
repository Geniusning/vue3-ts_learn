import 'element-plus/theme-chalk/base.css'
import { ElButton, ElInput } from 'element-plus'
const components = [ElButton, ElInput]
export function registerApp(app: any): void {
  for (const component of components) {
    app.component(ElButton.name, component)
  }
}
