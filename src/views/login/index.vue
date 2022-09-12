<template>
  <div class="login">
    <!-- <LoginPanel></LoginPanel> -->
    <div style="width: 600px; height: 500px">
      <DataFrom
        ref="dataForm"
        :form-info="formProps"
        :form="formData"
        :form-rules="rules"
      ></DataFrom>
      <el-button type="primary" @click="saveForm">保存</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import LoginPanel from './cnps/login-panel.vue'
import DataFrom from '../../components/CustomDataFrom.vue'
import type { FormRules } from 'element-plus'
const formData = ref({
  name: '',
  introduction: '',
  sex: 'male',
  status: 'working',
  how: '12',
  date: '2022-02-02'
})
const formProps = ref([
  {
    label: '名字',
    prop: 'name',
    type: 'input',
    span: 12,
    required: true,
    tipMessage: '请输入名字'
  },
  {
    label: '简介',
    prop: 'introduction',
    type: 'textares',
    span: 12,
    required: true
  },
  {
    label: '性别',
    prop: 'sex',
    type: 'select',
    span: 24,
    optionsList: [
      { id: 1, label: '男' },
      { id: 2, label: '女' }
    ]
  },
  { label: '状态', prop: 'status', span: 8 },
  { label: '代码量', prop: 'how', span: 8 },
  { label: '时间', prop: 'date', span: 8 }
])
const rules = ref<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' }
  ]
})
const dataForm = ref<InstanceType<typeof DataFrom>>()
function saveForm() {
  dataForm.value?.validateCustomDataForm()
}
</script>

<style lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
