<script setup>
import mySidebar from "../../components/sidebar/mysidebar.vue"
import {ref,onMounted} from 'vue';
import {ElMessage} from 'element-plus';

import {router} from "@/router/index.ts";
import {userInfo} from "@/api/user.ts";

let nickname = ref("")
let followers = ref(100)
let following = ref(260)
let avatarUrl = ref('')

const activities = ref([
  {id: 1, description: '发布了新视频', date: '2024-10-12'},
  {id: 2, description: '评论了视频', date: '2024-10-10'},
]);

const editProfile = () => {

  router.push({path: "/user/information"})
  // 编辑资料的逻辑
  //ElMessage.success('编辑资料功能尚未实现');
};

const changePassword = () => {
  router.push({path: "/user/changePassword"});
};

const viewFavorites = () => {
  // 查看收藏的逻辑
  ElMessage.success('查看收藏功能尚未实现');
};

function getUserInfo() {
  userInfo().then(res => {
    nickname.value = res.data.result.nickname;
    avatarUrl.value = res.data.result.imgURL
  })
}
onMounted(()=>{
  getUserInfo()
})


</script>

<template>
  <el-container>
    <el-main>
      <div class="profile-container">
        <el-card class="profile-card">
          <div slot="header" class="card-header">
            <el-avatar :src="avatarUrl" :fit="'fill'" :size="80" />
            <div class="user-info">
              <h2>{{ nickname }}</h2>
              <p>粉丝: {{ followers }} | 关注: {{ following }}</p>
            </div>
          </div>
          <div style="margin-top: 10px" class="card-body">
            <div class="icon-button" @click="editProfile">
              <el-icon :size="20"><edit /></el-icon>
              <span>编辑资料</span>
            </div>
            <div class="icon-button" @click="changePassword">
              <el-icon :size="20"><lock /></el-icon>
              <span>修改密码</span>
            </div>
            <div class="icon-button" @click="viewFavorites">
              <el-icon :size="20"><star /></el-icon>
              <span>查看收藏</span>
            </div>
          </div>
        </el-card>
        <el-card class="recent-activities" v-if="activities.length">
          <h3>最近活动</h3>
          <el-form>
            <el-form-item v-for="activity in activities" :key="activity.id">
              {{ activity.description }} - {{ activity.date }}
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.profile-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-card {
  width: 80%;
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  margin-left: 10px;
  align-items: center;
}

.user-info {
  margin-left: 40px;
}

.card-body {
  display: flex;
  justify-content: space-around; /* 平均分配按钮之间的空间 */
  margin-top: 10px;
}

.icon-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.recent-activities {
  width: 80%;
}
</style>