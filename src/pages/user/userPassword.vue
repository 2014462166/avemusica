<script setup>

import Mysidebar from "@/components/sidebar/mysidebar.vue";

import { ref } from 'vue';
import {UpdateUserPassword, userInfo} from "@/api/user.ts";
import {ElMessage, ElMessageBox} from "element-plus";
import {router} from "@/router/index.ts";
import * as path from "path";

let oldPassword = ref('')
let newPassword = ref('')
let confirmPassword = ref('')



    function handleSubmit () {
      if (newPassword.value===confirmPassword.value) {
        UpdateUserPassword({
          oldPassword:oldPassword.value,
          newPassword:newPassword.value,
        }).then(res => {
          if (res.data.code === '000') {
            ElMessage({
              message: "修改密码成功",
              type: 'success',
              center: true,
            });

            router.push({path:'/login'});
            ElMessage("请重新登录!");
          } else if (res.data.code === '400') {
            ElMessage({
              message: res.data.msg,
              type: 'error',
              center: true,
            });
          }
        });
      }else {
        ElMessage("新密码输入不一，请重新输入！");
      }
      resetForm();
    }

    const resetForm = () => {
      oldPassword.value = '';
      newPassword.value = '';
      confirmPassword.value = '';
    };
















</script>

<template>
  <el-container>
    <mysidebar/>
    <el-main>
      <el-card class="change-password-card">
        <h2>修改密码</h2>
        <el-form   label-width="120px" class="change-password-form">
          <el-form-item label="旧密码" >
            <el-input v-model="oldPassword" type="password" placeholder="请输入老密码" />
          </el-form-item>

          <el-form-item label="新密码" >
            <el-input v-model="newPassword" type="password" placeholder="请输入新密码" />
          </el-form-item>

          <el-form-item label="确认新密码" >
            <el-input v-model="confirmPassword" type="password" placeholder="请再次输入新密码" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-main>
  </el-container>
</template>

<style scoped>

.change-password-card {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.change-password-form {
  margin-top: 20px;
}
</style>