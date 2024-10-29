<script setup >

import {onMounted, toRefs,watch} from "vue";
import {useRoute} from "vue-router";

import {ref} from "vue";
import {getConcernInfo} from "@/api/user";
import UserInfo from "@/pages/user/userInfo.vue";
const router =useRoute();
let nickname = ref('')
let avatarUrl = ref('')
const username = ref("")

// 更新 username




let user= ref({
  avatar: 'https://via.placeholder.com/100',
  nickname: 'UP主昵称',
  followers: 1234,
  following: 567,
  recentMusic: [
    { title: '音乐1', releaseDate: '2024-10-01' },
    { title: '音乐2', releaseDate: '2024-09-15' },
    { title: '音乐3', releaseDate: '2024-08-20' },
  ],
});

function getInfo()
{
  console.log(username.value)
  getConcernInfo(
    username.value
  ).then(res=>{
    console.log(res)
    nickname.value=res.data.result.nickName;
    avatarUrl.value = res.data.result.imgURL;
    console.log(nickname.value)
    console.log(avatarUrl.value)
  })
}
onMounted(()=>{

  username.value = router.query.username;
  getInfo();

})
</script>

<template>
  <el-container>
    <el-main>
      <div class="user-profile">
        <el-card class="card" >
          <div class="header">
            <el-avatar :src="avatarUrl" size="large"></el-avatar>
            <div class="info">
              <h2>{{ nickname }}</h2>
              <p>粉丝数：{{ user.followers }}</p>
              <p>关注数：{{ user.following }}</p>
            </div>
          </div>
          <el-divider></el-divider>
          <h3>最近发布的音乐</h3>
          <el-form>
            <el-form-item v-for="(music, index) in user.recentMusic" :key="index">
              {{ music.title }} - {{ music.releaseDate }}
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.user-profile {
  max-width: 600px;
  margin: 20px auto;
}

.card {
  border-radius: 10px;
}

.header {
  display: flex;
  align-items: center;
}

.info {
  margin-left: 20px;
}

h2 {
  margin: 0;
  font-size: 24px;
}

h3 {
  margin: 20px 0 10px;
}
</style>