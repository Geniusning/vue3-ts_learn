<template>
  <el-form
    ref="customDataForm"
    :model="form"
    :rules="formRules"
    label-width="100px"
  >
    <el-row :gutter="gutter">
      <template v-for="(item, index) in formInfo" :key="index">
        <el-col :span="item.span">
          <el-form-item
            :key="item.prop"
            :prop="item.prop"
            :label="item.label"
            :rules="[
              {
                required: item.required,
                message: item.tipMessage ? item.tipMessage : '请输入必填内容'
              }
            ]"
          >
            <template v-if="item.type === 'textarea'">
              <el-input v-model="form[item.prop]" type="textarea" />
            </template>

            <template v-else-if="item.type === 'select'">
              <el-select v-model="form[item.prop]" style="width: 100%">
                <el-option
                  v-for="option in item.optionList"
                  :key="option.id"
                  :label="option.label"
                  :value="option.id"
                >
                </el-option>
              </el-select>
            </template>
            <template v-else>
              <el-input v-model="form[item.prop]" />
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { defineProps, PropType, ref, onMounted } from 'vue'
import type { ElForm } from 'element-plus'
interface IFormProps {
  label: string
  prop: string
  type?: string
  span: number
  [key: string]: any
}
const formProps = defineProps({
  gutter: {
    type: Number,
    default: 1
  },
  form: {
    type: Object,
    default() {
      return {}
    }
  },
  formRules: {
    type: Object
  },
  formInfo: {
    type: Object as PropType<IFormProps[]>
  }
})
onMounted(() => {
  console.log(formProps.formRules)
})
const customDataForm = ref<InstanceType<typeof ElForm>>()
function validateCustomDataForm() {
  customDataForm.value?.validate((valid) => {
    if (valid) {
      console.log('sumit successful')
    }
  })
}
// eslint-disable-next-line no-undef
defineExpose({
  validateCustomDataForm
})
</script>
