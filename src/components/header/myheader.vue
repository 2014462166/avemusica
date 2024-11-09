<script setup >
import { router } from "@/router";
import { Search, User, Upload, SwitchButton } from "@element-plus/icons-vue";
import {ElMessage, ElMessageBox} from "element-plus";

const role = sessionStorage.getItem('role'); // 登录时插入的

// 退出登录
function logout() {
  ElMessageBox.confirm(
      '是否要退出登录？',
      '提示',
      {
        customClass: "customDialog",
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: "warning",
        showClose: false,
        roundButton: true,
        center: true
      }
  ).then(() => {
    sessionStorage.setItem('token', '');
    router.push({ path: "/login" });
  });
}

function handleSearch(){
  ElMessage.warning("搜索功能未实现！");
  //TODO
}
</script>

<template>
  <el-header class="custom-header">
    <el-row :gutter="10" align="middle">
      <el-col :span="4" class="header-text">
        <h1 style="font-family:'Vladimir Script',serif " @click="router.push({path: '/home'} )">AveMusica</h1>
      </el-col>

      <el-col :span="2"></el-col>

      <el-col :span="12">
        <div class="search-container">
          <el-icon class="search-icon" :size="30"><Search /></el-icon>
          <el-input placeholder="搜索" class="search-input" />
          <el-button class="search-button" type="success" @click="handleSearch()">搜索</el-button>
        </div>
      </el-col>

      <el-col :span="1"></el-col>

      <el-col :span="1" class="header-icon">
        <router-link to="/musics/addMusic" v-slot="{navigate}">
          <el-icon @click="navigate" :size="30" color="white" ><Upload /></el-icon>
        </router-link>
      </el-col>
      <el-col :span="1" class="header-icon">
        <router-link to="/user/information" v-slot="{navigate}">
          <el-icon @click="navigate" :size="30" color="white" ><User /></el-icon>
        </router-link>
      </el-col>
      <el-col :span="1" class="header-icon">
        <a @click="logout">
          <el-icon :size="30" color="white" ><SwitchButton /></el-icon>
        </a>
      </el-col>
    </el-row>
  </el-header>
</template>

<style scoped>
.custom-header {
  background-color: #409eff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 10px 0;
}

.header-text {
  color: white;
  font-size: xx-large;
  text-align: left;
  margin-left: 20px;
}

.search-container {
  display: flex;
  align-items: center;
}

.search-input {
  flex: 1;
}

.search-icon {
  margin-right: 10px;
}

.search-button {
  margin-left: 0;
}

.header-icons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-icon {
  margin-left: 15px;
}
</style>
