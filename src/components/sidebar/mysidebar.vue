<script setup lang="ts">
import {ref,onMounted} from 'vue';
import {userInfo} from "@/api/user.ts";

let isCollapsed = ref(false);
let nickname =ref("")
let avatarUrl = ref("")

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

const handleOpen = (key, keyPath) => {
  console.log('Opened menu item:', key, keyPath);
};

const handleClose = (key, keyPath) => {
  console.log('Closed menu item:', key, keyPath);
};

function getUserInfo() {
  userInfo().then(res => {
    nickname.value = res.data.result.nickname;
    avatarUrl.value = res.data.result.imgURL;
  })
}

onMounted(()=>{
  getUserInfo();
})
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
      <el-menu-item index="/community">社区</el-menu-item>
      <el-menu-item index="/concern">关注</el-menu-item>
      <el-menu-item  index="/user">我的</el-menu-item>

    </el-menu>
    <router-link to="/user/information">
      <el-avatar style="position: relative;top: 40%;left: 30%" :size="80"  :src="avatarUrl"/>
    </router-link>

    <h1 style="position: relative;top: 40%;text-align: center">
     <span class="title"
           style="font-size:26px;
           font-family:'Vladimir Script',serif ">  {{ nickname }}   </span>
    </h1>

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
