<script setup>
import {ref} from 'vue';

let isCollapsed = ref(false);

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

const handleOpen = (key, keyPath) => {
  console.log('Opened menu item:', key, keyPath);
};

const handleClose = (key, keyPath) => {
  console.log('Closed menu item:', key, keyPath);
};
</script>


<template>
  <el-aside :width="isCollapsed ? '0px' : '200px'" class="sidebar">
    <el-menu
        router

        :collapse="isCollapsed"
        default-active="1"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-menu-item index="2">社区</el-menu-item>
      <el-menu-item index="3">动态</el-menu-item>
      <el-menu-item index="4">关注</el-menu-item>
      <el-menu-item  index="/user">我的</el-menu-item>


    </el-menu>
    <el-button style="bottom: 20px;position: fixed" @click="toggleCollapse" class="collapse-button">
      {{ isCollapsed ? '展开' : '收起' }}
    </el-button>
  </el-aside>

</template>


<style scoped>
.sidebar {
  background-color: #f5f5f5;
  box-shadow: 2px 0 5px rgba(57, 197, 187, 1);
  transition: width 0.2s ease;
}

.collapse-button {
  margin: 10px;
}
</style>
