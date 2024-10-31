<script setup >

import {onMounted,computed,onBeforeMount} from "vue";
import {useRoute} from "vue-router";

import {ref} from "vue";
import {followUser, getConcernInfo, unfollowUser} from "@/api/concern.ts";
import UserInfo from "@/pages/user/userInfo.vue";
import {ElMessage} from "element-plus";
const router =useRoute();
let nickname = ref('')
let avatarUrl = ref('')
const username = ref("")
const followerId = ref(0)
const followedId = ref()
const followList = ref([])


const isFollowing = ref(); // 初始状态

const loading = ref(false); // 加载状态

const toggleFollow = async () => {
  loading.value = true; // 开始加载
  // 模拟 API 调用
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (isFollowing.value)
  {
    await unfollowUser(
      followerId.value,
      followedId.value
    ).then(()=>{
      ElMessage("已取消关注！")
    })
  }else {
    followUser(
      followerId.value,
      followedId.value
    ).then(()=>{
      ElMessage("关注成功！")
    })
  }
  isFollowing.value = !isFollowing.value; // 切换关注状态
  loading.value = false; // 结束加载
};




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
  getConcernInfo(
    username.value
  ).then(res=>{

    nickname.value=res.data.result.nickname;
    avatarUrl.value = res.data.result.imgURL;
    followedId.value = res.data.result.id;
    followList.value = res.data.result.followers;
    isFollowing.value =(followList.value.indexOf(Number(followerId.value))>=0)
  })
}



onBeforeMount(()=>{
  username.value = router.query.username;
  followerId.value = router.query.id;
  getInfo();
})

</script>

<template>
  <el-container>
    <el-main>
      <el-row class="user-profile">
        <el-card class="card" >
            <el-row>
              <el-col :span="4">
                <el-avatar :src="avatarUrl" size="large"></el-avatar>
              </el-col>
              <el-col :span="12" class="info">
                <h2>{{ nickname }}</h2>
                <p>粉丝数：{{ user.followers }}</p>
                <p>关注数：{{ user.following }}</p>
              </el-col>
              <el-col :span="6" style="align-self: center">
                <el-button
                    :type="isFollowing ? 'default' : 'primary'"
                    :loading="loading"
                    @click="toggleFollow"
                    class="follow-button"
                >
                  {{ isFollowing ? '取消关注' : '关注' }}
                </el-button>
              </el-col>
            </el-row>


          <el-divider></el-divider>
          <h3>最近发布的音乐</h3>
          <el-form>
            <el-form-item v-for="(music, index) in user.recentMusic" :key="index">
              {{ music.title }} - {{ music.releaseDate }}
            </el-form-item>
          </el-form>
        </el-card>
      </el-row>
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
  width: 800px;
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
.follow-button {
  width: 120px;
}
h3 {
  margin: 20px 0 10px;
}
</style>