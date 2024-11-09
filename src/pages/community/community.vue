<script setup>
import { ref, computed } from 'vue';
import {ArrowLeftBold, ArrowRightBold} from "@element-plus/icons-vue";

const circles = ref([
  { name: '周杰伦圈', img: 'src/assets/kaoru.jpg' },
  { name: 'YOASOBI圈', img: 'src/assets/kaoru.jpg' },
  { name: '米津玄师圈', img: 'src/assets/kaoru.jpg' },
  { name: '周杰伦圈', img: 'src/assets/kaoru.jpg' },
  { name: 'YOASOBI圈', img: 'src/assets/kaoru.jpg' },
  { name: '米津玄师圈', img: 'src/assets/kaoru.jpg' },
  { name: '周杰伦圈', img: 'src/assets/kaoru.jpg' },
  { name: 'YOASOBI圈', img: 'src/assets/kaoru.jpg' },
  { name: '米津玄师圈', img: 'src/assets/kaoru.jpg' },
]);

const posts = ref([
  { title: '周杰伦新专辑讨论', content: '期待新歌发布！' },
  { title: '动漫推荐', content: '最近看了一个新番，很精彩！' },
]);

const currentPage = ref(0);
const itemsPerPage = 8;

// 计算当前页的圈子列表
const displayedCircles = computed(() => {
  const start = currentPage.value * itemsPerPage;
  return circles.value.slice(start, start + itemsPerPage);
});

const nextPage = () => {
  if ((currentPage.value + 1) * itemsPerPage < circles.value.length) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};
</script>

<template>
  <el-container>
    <el-header height="100px" style="display: flex; align-items: center;">
      <el-icon @click="prevPage" :disabled="currentPage === 0" :size="30"><ArrowLeftBold /></el-icon>
      <el-row type="flex" justify="start" align="middle" style="flex: 1; overflow: hidden;">
        <el-col v-for="(circle, index) in displayedCircles" :key="index" :span="3">
          <div style="text-align: center;">
            <img :src="circle.img" alt="circle.name" style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;">
            <p>{{ circle.name }}</p>
          </div>
        </el-col>
      </el-row>
      <el-icon @click="nextPage" :disabled="(currentPage + 1) * itemsPerPage >= circles.length" :size="30"><ArrowRightBold /></el-icon>
    </el-header>

    <el-main>
      <el-row>
        <el-col v-for="(post, index) in posts" :key="index" :span="24">
          <el-card class="post-card" shadow="hover">
            <h3>{{ post.title }}</h3>
            <p>{{ post.content }}</p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
.post-card {
  margin: 20px 0;
  padding: 20px;
}
</style>
