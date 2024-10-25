<script setup lang="ts">
import mySidebar from "../../components/sidebar/mysidebar.vue"
import {onMounted,ref} from "vue";
import Myheader from "@/components/header/myheader.vue";
import {router} from "@/router/index.ts";
import {musicsPageInfo,MusicsInfo} from "@/api/music.ts";



const musicList = ref([] as MusicsInfo[]);
const currentPage = ref(1);
const pageSize = ref(5);
const totalItems = ref(0);

const musics = [{
  id: 1,
  music: "../assets/music1.mp3",
  img: "https://tse4-mm.cn.bing.net/th/id/OIP-C.EFicPtAHO163Ohcxg1G-mAHaJM?w=148&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  title: "MerryChristmas",
  author: "坂本龙一",
},{
  id:2,
  music: "../assets/Avid.mp3",
  img: "https://tse1-mm.cn.bing.net/th/id/OIP-C.Wc82Jp8UNmu8z3cgFNZJigAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  title: "Avid",
  author:"泽野弘之"
}];

function loadMusics(page) {
  musicsPageInfo(page - 1, pageSize.value).then(res => {
    totalItems.value = res.data.result.totalElements;
    musicList.value = res.data.result.content;
  });
}
function handlePageChange(page) {
  currentPage.value = page;
  loadMusics(page);
}
function handleSizeChange(newSize) {
  pageSize.value = newSize;
  currentPage.value = 1; // Reset to the first page
  loadMusics(currentPage.value);
}

onMounted(() => {
  loadMusics(currentPage.value);
});

function addMusic()
{
  router.push({path:"/musics/addMusic"})
}



</script>

<template>
  <el-container>
    <el-header class="header">
      <el-button type="primary" @click="addMusic">添加音乐</el-button>
    </el-header>
    <el-container>
      <my-sidebar/>
    <el-main>

      <el-row :gutter="20">
        <el-col :span="12">
          <el-carousel type="card">
            <el-carousel-item v-for="music in musics"  >
              <el-image style="width: 100%; height: 100%;border-radius: 6px" :src="music.img" :fit="'cover'"/>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="12">
          <el-carousel type="card">
            <el-carousel-item v-for="music in musics"  >
              <el-image style="width: 100%; height: 100%;border-radius: 6px" :src="music.img" :fit="'cover'"/>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>


      <el-row :gutter="20" >
        <el-col   :span="12" v-for="music in musicList">
          <el-card style="width: 100%" >
            <el-row >
              <el-col :span="8">
                <el-image style="width: 50%; height: 100px;border-radius: 6px" :src="musics[0].img" :fit="'cover'"/>
<!--                <img style="width: 50%; height: 100px;border-radius: 6px" :src="music.img" alt="加载失败"/>-->
              </el-col>
              <el-col :span="16">
                <div  class="music-info">
                  <h2>
                    {{ music.musicName }}
                  </h2>
                  <h4>
                    {{ music.description }}
                  </h4>
                  <audio controls style="width: 100%">
                    <source :src="music.musicUrl">
                  </audio>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    </el-container>
  </el-container>


</template>

<style scoped>

.music-info {
  margin-top: 10px;
}
.header{
  background-color: lightskyblue;
}
</style>