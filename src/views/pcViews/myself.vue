<template>
  <div>
    <el-button type="primary" @click="goCenter()">Primary</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
// * 仓库
const store = useStore();
// * 路由对象
const route = useRoute();
// * 路由实例
const router = useRouter();
console.log('1-开始创建组件-setup')
// * 数据部分
const data = reactive({
    useInfo:{
      name: '李锦鹏',
      sex: '男',
      age: '27',
      birthday: '1995年7月6日',
      email: '745903408@qq.com',
      tel: '15206123618'
    },
})
onBeforeMount(() => {
  console.log('2.组件挂载页面之前执行----onBeforeMount')
}),
onMounted(() => {
  console.log(store.state.test,"store")
  console.log(router,"router")
  console.log(route,"route")
  console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
  console.log("watch")
})
function goCenter(){
  console.log("路由跳转")
  //path跳转 params发送不了参数 得用query
  router.push({ name: "center" ,params:{id:"test"}})
}
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'></style>