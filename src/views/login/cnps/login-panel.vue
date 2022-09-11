<template>
  <div>
    <div class="login-panel">
      <h1 class="title">后台管理系统</h1>
      <el-tabs type="border-card" stretch>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-user-solid"></i> 账号登录</span>
          </template>
          <login-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
          </template>
          <login-phone />
        </el-tab-pane>
      </el-tabs>

      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <Demo ref="demo" />
      <el-button type="primary" class="login-btn" @click="handleLoginClick"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import Demo from './demo.vue'

let isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const demo = ref<InstanceType<typeof Demo>>()
onMounted(() => {
  demo.value?.getDemo()
  console.log('demoValue', demo.value?.demoValue)
})
const handleLoginClick = () => {
  accountRef.value?.loginAction(isKeepPassword.value)
  demo.value?.getDemo()
  console.log('demoValue', demo.value?.demoValue)
}
</script>

<style lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
