import { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import {
  ElButton,
  ElInput,
  ElTabPane,
  ElTabs,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption
} from 'element-plus'

const components = [
  ElButton,
  ElInput,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption
]

export default function (app: App): void {
  for (const component of components) {
    app.component(ElButton.name, component)
  }
}
