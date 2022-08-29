<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
export interface IBook {
  id: number
  name: string
}
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(props) {
    onMounted(() => {
      console.log(123)
    })
  }
})
</script>
