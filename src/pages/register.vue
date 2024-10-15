<script setup>

import {ref} from "vue";

let username = ref("");
let password = ref("");
let nickname = ref("")
let address = ref("")
let sex = ref("")
</script>

<template>
  <el-main class="main-frame login-background">
    <el-card class="login-card card-background">
      <div>
        <h1>
          注册您的<span class="title"
                        style="font-size:xxx-large;font-family:'Vladimir Script',serif ">   AveMusica!!!!!  </span>账户
        </h1>
        <el-form>
          <el-row>
            <el-col :span="12">
              <el-form-item>
                <label for="nickname">昵称</label>
                <el-input clearable style="width: 160px" class="input" id="username" type="text"
                          placeholder="请输入昵称"
                          v-model="nickname"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <label for="username">用户名</label>
                <el-input clearable style="width: 160px" class="input" id="username" type="text"
                          placeholder="请输入账户"
                          v-model="username"/>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <label for="password">密码</label>

                <el-input clearable style="width: 160px" class="input" id="password" type="password"
                          placeholder="请输入密码" v-model="password" show-password/>

              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item>
                <label for="address">地址</label>
                <el-input clearable style="width: 160px" class="input" id="address"
                          placeholder="请输入地址" v-model="address"/>

              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item>
                <label for="sex">性别</label>
                <el-select v-model="sex" placeholder="请选择性别" style="width: 160px" id="sex">
                  <el-option label="男" value="male" />
                  <el-option label="女" value="female"/>
                  <el-option label="不愿透露" value="unknow"/>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>


          </el-row>


          <el-form-item>


          </el-form-item>
        </el-form>
      </div>
      <div style="display: flex;justify-content: space-evenly;">
        <el-button color="#39C5BB">
          <el-text style="color: white">注册</el-text>
        </el-button>
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

label {
  width: 60px;
}

div {
  text-align: center;
}




</style>