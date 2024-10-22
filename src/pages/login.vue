<script setup>

import {ref} from "vue";
import {ElMessage} from "element-plus";
import {userLogin,userInfo} from "@/api/user.ts";
import {router} from "@/router/index.ts";


let username = ref("");
let password = ref("");

function handleLogin() {
  userLogin({
    username: username.value,
    password: password.value
  }).then(res => {
    if (res.data.code === '000') {
      console.log(res);
      ElMessage({
        message: "登录成功",
        type: 'success',
        center: true,
      });
      const token = res.data.result;
      sessionStorage.setItem('token', token);
      userInfo().then(res => {
        sessionStorage.setItem('name', res.data.result.name);
        sessionStorage.setItem('phone', res.data.result.telephone);

        router.push({path: "/home"});
      });
    } else if (res.data.code === '400') {
      ElMessage({
        message: res.data.msg,
        type: 'error',
        center: true,
      });
      password.value = '';
    }
  });
}
</script>

<template>
  <el-main class="main-frame login-background">
    <el-card class="login-card card-background">
      <div >
        <h1>
          登录您的<span class="title"
                        style="font-size:xxx-large;font-family:'Vladimir Script',serif ">  AveMusica!!!!!   </span>账户
        </h1>
        <el-form style="display: flex;justify-content: space-between;">

          <el-form-item>
            <label for="username">用户名</label>
            <el-input clearable style="width: 200px" class="input" id="username" type="text" placeholder="请输入账户"
                      v-model="username"/>
          </el-form-item>


          <el-form-item>
            <label for="password">密码</label>

            <el-input clearable style="width: 200px" class="input" id="password" type="password"
                      placeholder="请输入密码" v-model="password" show-password/>

          </el-form-item>
        </el-form>
      </div>
      <div style="display: flex;justify-content: space-evenly;">
        <el-button color="#39C5BB" @click="handleLogin"><el-text style="color: white">登录</el-text></el-button>
        <router-link to="/register">
          <el-button  color="#39C5BB"><el-text style="color: white">注册</el-text></el-button>
        </router-link>
      </div>
    </el-card>
  </el-main>


</template>

<style scoped>
.main-frame {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}



.login-card {
  width: 40%;
  padding: 10px;
  border-radius: 10px;
}

.login-background {
  background-image: url("../assets/pjsk.png");
  background-position: center;
  background-size: cover;
}

.title {
  color: lightskyblue;
}

label{
  width: 60px;

}
div {
  text-align: center;
}

.input {
  width: fit-content;
}
el-button{

}

</style>