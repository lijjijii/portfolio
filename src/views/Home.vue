<template>
  <div class="home">
    <div id="header">
      <p>点击切换显示隐藏</p>
      <div class="close" @click="closeTask()" ref="closeTop">关闭</div>
    </div>
    <div class="open" @click="openTask()" >打开</div>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// var oDiv: any = document.getElementById("header");


export default defineComponent({
  name: 'Home',
  components: {
  },
  setup(){
    return{
      oDiv, oOpen
    }
  },
  mounted (){
    console.log("aaa ")
    oDiv = document.getElementById("header");
    oOpen = document.getElementsByClassName("open");
  },
  methods: {
    closeTask() {
      var oDiv: any = document.getElementById("header");
      var oOpen: any = document.getElementsByClassName("open");
      oDiv.style.height = "0";
      oOpen[0].style.top = "0"
    },
    openTask() {
      var oDiv: any = document.getElementById("header");
      var oOpen: any = document.getElementsByClassName("open");
      var oDivheight = oDiv.offsetHeight;
      var oOpenheight = oOpen[0].offsetHeight;
      console.log(oDivheight)
      oDiv.style.height = `${oDivheight}px`;
      oOpen[0].style.top = `-${oOpenheight}px`;

    }
  }
});
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

#header {
  width: 100%;
  height: 50px;
  background-color: cadetblue;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
}

#header>p {
  line-height: 50px;
}

.close {
  position: absolute;
  right: 5%;
  top: 0;
  padding: 10px;
  line-height: 30px;
  cursor: pointer;
}

.open {
  position: absolute;
  right: 5%;
  padding: 10px;
  line-height: 30px;
  background-color: cadetblue;
  cursor: pointer;
  transition: all 0.5s;
  color: white;
}
</style>