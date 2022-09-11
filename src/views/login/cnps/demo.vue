<template>
  <div class="demo">
    <p>这个是demo</p>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from 'vue'
const demoValue = ref('demo-01')

const getDemo = () => {
  console.log('获取demo数据')
}
defineExpose({
  demoValue,
  getDemo
})
</script>

<style lang="less"></style>
