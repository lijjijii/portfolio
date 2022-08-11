<template>
  <div>个人中心</div>
</template>

<script lang='ts' setup>
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
const store = useStore(); //仓库
const route = useRoute(); //路由对象
const router = useRouter(); //路由实例
//console.log('1-开始创建组件-setup')
//数据部分
const data = reactive({})
onBeforeMount(() => {
    console.log(route.params.id, '接收到的信息')
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {
    console.log(route.params,'接收到的信息')
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
  //console.log('4.-watch-------watchEffect')
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
</style>