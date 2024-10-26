<script setup lang="ts">
import { ref } from 'vue';
import Mysidebar from "@/components/sidebar/mysidebar.vue";

const users = ref([
  { name: '用户1', avatar: 'https://via.placeholder.com/100' },
  { name: '用户2', avatar: 'https://via.placeholder.com/100' },
  { name: '用户3', avatar: 'https://via.placeholder.com/100' },
  { name: '用户4', avatar: 'https://via.placeholder.com/100' },
  { name: '用户5', avatar: 'https://via.placeholder.com/100' },
  { name: '用户6', avatar: 'https://via.placeholder.com/100' },
  { name: '用户7', avatar: 'https://via.placeholder.com/100' },
  { name: '用户8', avatar: 'https://via.placeholder.com/100' },
  { name: '用户9', avatar: 'https://via.placeholder.com/100' },
  { name: '用户10', avatar: 'https://via.placeholder.com/100' },
  { name: '用户10', avatar: 'https://via.placeholder.com/100' },
  { name: '用户wgwg10', avatar: 'https://via.placeholder.com/100' },
  { name: '用wegw户10', avatar: 'https://via.placeholder.com/100' },
  { name: '用q户10', avatar: 'https://via.placeholder.com/100' },
  { name: '用户ewt10', avatar: 'https://via.placeholder.com/100' },
  { name: '用户wet10', avatar: 'https://via.placeholder.com/100' },
  { name: '用户qwe10', avatar: 'https://via.placeholder.com/100' },
  { name: '用户qweqw10', avatar: 'https://via.placeholder.com/100' },
]);
</script>

<template>
  <el-container>
    <mysidebar/>
    <el-main>
      <div class="follow-page">
        <div class="follow-list">
          <el-card v-for="(user, index) in users" :key="index" class="user-card">
            <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
            <div class="user-name">{{ user.name }}</div>
          </el-card>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.follow-page {
  padding: 20px;
}

.follow-list {
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  scroll-behavior: smooth; /* Optional: smooth scrolling */
}

.user-card {
  margin-right: 10px;
  width: 100px; /* Fixed width for each card */
  text-align: center;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  flex-shrink: 0; /* Prevent cards from shrinking */
}

.user-avatar {
  width: 100%;
  border-radius: 50%;
}

.user-name {
  margin-top: 5px;
  font-size: 14px;
}
</style>
