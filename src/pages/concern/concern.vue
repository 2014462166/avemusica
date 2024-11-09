<script setup lang="ts">
import mySidebar from "../../components/sidebar/mysidebar.vue";

import Header from "../../components/header/myheader.vue"
import {router} from "@/router";
import {onMounted, ref} from "vue";

import {getConcernInfo, getConcernList, GetConcernListInfo, GetMusicListInfo} from "@/api/concern";
import {userInfo} from "@/api/user";
import {getMusicList} from "@/api/music";


let concernList = ref([] as GetConcernListInfo[]);
let userId = ref()
let musicList = ref([] as GetMusicListInfo[])


function clickConcernedUser(username: string) {
  router.push({path: '/user/userIntroduction', query: {username: username, id: userId.value}})
}

function getMusicListInfo(username: string) {
  getMusicList(username).then(
      (res) => {
        console.log(res)
        musicList.value = res.data.result;
      }
  )
}


onMounted(() => {
  userInfo().then((res) => {
    userId.value = res.data.result.id;
  })

  getConcernList().then((res) => {
    concernList.value = res.data.result;
  })

})

</script>

<template>
  <el-container>
    <el-main>
      <el-row style="width: 100%">
        <el-col span="8" class="concern-list">
          <h2>关注列表</h2>
          <el-scrollbar max-height='750px' height="750px">
            <el-card
                v-for="concern in concernList"
                :key="concern.id" class="concern-item"
                @click="getMusicListInfo(concern.username)"
            >
              <el-image @click="clickConcernedUser(concern.username)" :src="concern.imgURL" alt="用户头像"
                        class="avatar"></el-image>
              <span class="nickname">{{ concern.nickname }}</span>
            </el-card>
          </el-scrollbar>
        </el-col>

        <el-col span="16">
          <el-card v-for="music in musicList"
                   :key="music.id">
            <el-image :src="music.imgurl" alt="用户头像"/>
            <el-divider/>
          </el-card>

        </el-col>

      </el-row>

    </el-main>
  </el-container>
</template>

<style scoped>

.concern-list {
  height: 100%;
  width: 200px;
  padding: 10px;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
}

.concern-item {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px;
  width: 80%;
  border-width: 2px;
  border-color: pink;
}

.avatar {
  width: 100%; /* 头像宽度 */
  height: 100%; /* 头像高度 */
  border-radius: 50%; /* 圆形头像 */
  border-color: #181818;

}

.nickname {
  font-size: 16px;
}
</style>
