<script setup>
import mySidebar from "../components/sidebar/mysidebar.vue"
import {onMounted} from "vue";


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


// const fetchMusics = async () => {
//   const response = await fetch('https://api.example.com/videos'); // 替换为实际 API
//   music.value = await response.json();
// }


onMounted(() => {
  console.log(musics);
});

</script>

<template>
  <el-container>
    <my-sidebar/>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-carousel type="card">
            <el-carousel-item v-for="music in musics" :key="music.id" >
              <el-image style="width: 100%; height: 100%;border-radius: 6px" :src="music.img" :fit="'cover'"/>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="12">
          <el-carousel type="card">
            <el-carousel-item v-for="music in musics" :key="music.id" >
              <el-image style="width: 100%; height: 100%;border-radius: 6px" :src="music.img" :fit="'cover'"/>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col v-for="music in musics" :key="music.id" :span="12">
          <el-card style="width: 100%">
            <el-row>
              <el-col :span="8">
                <el-image style="width: 50%; height: 100px;border-radius: 6px" :src="music.img" :fit="'cover'"/>
<!--                <img style="width: 50%; height: 100px;border-radius: 6px" :src="music.img" alt="加载失败"/>-->
              </el-col>
              <el-col :span="16">
                <div class="music-info">
                  <h2>
                    {{ music.title }}
                  </h2>
                  <h4>
                    {{ music.author }}
                  </h4>
                  <audio controls style="width: 100%">
                    <source src="../assets/music1.mp3">
                  </audio>
                </div>
              </el-col>
            </el-row>


          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>


</template>

<style scoped>

.music-info {
  margin-top: 10px;
}
</style>