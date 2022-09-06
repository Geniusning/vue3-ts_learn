import { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import {
  ElButton,
  ElInput,
  ElTabPane,
  ElTabs,
  ElForm,
  ElFormItem
} from 'element-plus'

const components = [ElButton, ElInput, ElTabs, ElTabPane, ElForm, ElFormItem]

export default function (app: App): void {
  for (const component of components) {
    app.component(ElButton.name, component)
  }
}
