<script setup lang="ts">
import mySidebar from "../../components/sidebar/mysidebar.vue";
import { onMounted, ref, computed } from "vue";
import { router } from "@/router/index.ts";
import { musicsPageInfo, MusicsInfo } from "@/api/music.ts";
import { userInfo } from "@/api/user";
import Header from "../../components/header/myheader.vue";

const musicList = ref([] as MusicsInfo[]);
const currentPage = ref(1);
const pageSize = ref(2);
const totalItems = ref(0);
const username = ref("");
const playingAudio = ref<HTMLAudioElement | null>(null); // 用于存储当前播放的音频

const musics = [{
  id: 1,
  music: "../assets/music1.mp3",
  img: "https://tse4-mm.cn.bing.net/th/id/OIP-C.EFicPtAHO163Ohcxg1G-mAHaJM?w=148&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  title: "MerryChristmas",
  author: "坂本龙一",
}, {
  id: 2,
  music: "../assets/Avid.mp3",
  img: "https://tse1-mm.cn.bing.net/th/id/OIP-C.Wc82Jp8UNmu8z3cgFNZJigAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  title: "Avid",
  author: "泽野弘之"
}];

function loadMusics(page) {
  musicsPageInfo(page - 1, pageSize.value).then(res => {
    totalItems.value = res.data.result.totalElements;
    musicList.value = res.data.result.content;
    console.log(res.data.result.content)
  });
}

function handlePageChange(page) {
  currentPage.value = page;
  console.log(page,pageSize.value)
  loadMusics(currentPage.value);
}

function handleSizeChange(newSize) {
  pageSize.value = newSize;
  currentPage.value = 1; // Reset to the first page
  loadMusics(currentPage.value);
}

function getUserInfo() {
  userInfo().then(res => {
    username.value = res.data.result.username;
  });
}

onMounted(() => {
  getUserInfo();
  loadMusics(currentPage.value);
});

function addMusic() {
  router.push({ path: "/musics/addMusic" });
}

function handleAudioPlay(audioElement: HTMLAudioElement) {
  if (playingAudio.value && playingAudio.value !== audioElement) {
    playingAudio.value.pause(); // 暂停当前播放的音频
  }
  playingAudio.value = audioElement; // 更新当前播放的音频
}


</script>

<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-carousel type="card">
            <el-carousel-item v-for="music in musics" :key="music.id">
              <el-image style="width: 100%; height: 100%; border-radius: 6px" :src="music.img" :fit="'cover'" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="12">
          <el-carousel type="card">
            <el-carousel-item v-for="music in musics" :key="music.id">
              <el-image style="width: 100%; height: 100%; border-radius: 6px" :src="music.img" :fit="'cover'" />
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="12" v-for="music in musicList" :key="music.id">
          <el-card style="width: 100%">
            <el-row>
              <el-col :span="8">
                <router-link :to="{path:'/user/userIntroduction',query:{username:music.username}}">
                  <el-image style="width: 50%; height: 100px; border-radius: 6px" :src="music.imgUrl" :fit="'cover'" />
                </router-link>
              </el-col>
              <el-col :span="16">
                <div class="music-info">
                  <h2>{{ music.musicName }}</h2>
                  <h4>{{ music.description }}</h4>
                  <audio
                      controls
                      style="width: 100%"
                      @play="handleAudioPlay($event.target)"
                  >
                    <source :src="music.musicUrl" />
                  </audio>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

      <!-- Pagination Controls -->
      <el-pagination
          background
          layout="total, prev, pager, next, sizes"
          :total="totalItems"
          :page-size="pageSize"
          :current-page="currentPage"
          @current-change="handlePageChange"
          @size-change="handleSizeChange"
          :page-sizes="[5, 10, 20]"
      />
    </el-main>
  </el-container>
</template>

<style scoped>
.header {
  background-color: #409eff;
}
el-header {
  background-color: #4A90E2;
  color: white;
  padding: 10px 20px;
  text-align: center;
}
el-button {
  background-color: #5CB85C;
  color: white;
}
el-container {
  background-color: #F5F7FA;
  padding: 20px;
}
.music-info {
  margin-top: 10px;
  text-align: left;
}
el-card {
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
el-card:hover {
  transform: scale(1.02);
}
el-carousel {
  margin-bottom: 20px;
}
el-image {
  border-radius: 10px;
}
audio {
  margin-top: 10px;
}
el-col {
  margin-bottom: 20px;
}
</style>
