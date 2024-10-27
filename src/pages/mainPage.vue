<script setup lang="ts">
import Header from "../components/header/myheader.vue";
import mySidebar from "../components/sidebar/mysidebar.vue";
</script>

<template>
  <el-container class="mainContainer">
    <Header />
    <el-container class="bodyContainer">
      <my-sidebar />
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.bodyContainer {
  display: flex; /* 内容区域使用flex布局 */
  flex: 1; /* 使该区域占据剩余空间 */
}

</style>

