<script setup>
import mySidebar from "../../components/sidebar/mysidebar.vue"
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import img_URL from '@/assets/fulilian.jpg'
import {router} from "@/router/index.ts";

let username = ref("ThUndertaker")
let followers = ref(100)
let following = ref(260)





    const activities = ref([
      { id: 1, description: '发布了新视频', date: '2024-10-12' },
      { id: 2, description: '评论了视频', date: '2024-10-10' },
    ]);

    const editProfile = () => {

      router.push({path:"/user/information"})
      // 编辑资料的逻辑
      //ElMessage.success('编辑资料功能尚未实现');
    };

    const changePassword=()=>{
      router.push({path:"/user/changePassword"});
    };

    const viewFavorites = () => {
      // 查看收藏的逻辑
      ElMessage.success('查看收藏功能尚未实现');
    };




</script>

<template>
  <el-container>
    <my-sidebar/>
    <el-main>
      <div class="profile-container">
        <el-card class="profile-card">
          <div slot="header" class="card-header">
           <el-avatar :src=img_URL  :fit="'fill'" :size="80"/>
            <div class="user-info">
              <h2>{{ username }}</h2>
              <p>粉丝: {{ followers }}  |  关注: {{ following }}</p>
            </div>
          </div>
          <div style="margin-top: 10px" class="card-body">
            <el-button type="primary" @click="editProfile">编辑资料</el-button>
            <el-button type="primary" @click="changePassword">修改密码</el-button>
            <el-button type="primary" @click="viewFavorites">查看收藏</el-button>
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
  align-items: center;
}

.user-info {
  margin-left: 20px;
}

.recent-activities {
  width: 80%;
}
</style>