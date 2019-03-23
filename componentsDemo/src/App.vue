<template>
  <div id="app">
    <Button color="red">我是基本组件</Button>
    <Button-first color='blue' v-on:click.native="btn()">我是全局组件</Button-first> 
    <!-- 父组件想要在子组件上监听事件必须加native -->

    <!-- 构造组件的使用 -->
    <Button color="yellow" @click.native="msg">构造组件的弹窗</Button>
  </div>
</template>

<script>
// 导入基本组件
import Button from "@/components/button.vue";


export default {
  name: 'App',
  components: {
    Button
  },
  methods: {
    btn(){
       console.log(12323)
    },
    msg(){
      this.$message({value:"我是构造组件的弹窗"})
    }
  }
}
</script>

<style>


</style>
