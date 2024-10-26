<script>
import mySidebar from "../components/sidebar/mysidebar.vue";
import { getConcernList } from "../api/concern.ts";

export default {
  data() {
    return {
      concernList: [
        {
          id: 1,
          image_path: "src/assets/kaoru.jpg",
          name: "shiroko"
        },
        {
          id: 1,
          image_path: "src/assets/kaoru.jpg",
          name: "shiroko"
        },
      ]
    };
  },
  components: {
    mySidebar,
  },
  methods: {
    initConcernList() {
      getConcernList({}).then(res => {
        this.concernList = res.data;
      });
    },
    clickConcernedUser(id){
      console.log(id)
      //TODO
    }
  },
  created() {
    //this.initConcernList();
  }
}
</script>

<template>
  <el-container>
    <my-sidebar/>
    <el-main>
      <div class="concern-list">
        <h2>关注列表</h2>
        <div v-for="concern in concernList" :key="concern.id" class="concern-item" @click="clickConcernedUser(concern.id)">
          <el-image :src="concern.image_path" alt="用户头像" class="avatar"></el-image>
          <span class="username">{{ concern.name }}</span>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.concern-list {
  width: 200px; /* 可以根据需要调整宽度 */
  padding: 10px;
  border-right: 1px solid #e0e0e0;
}

.concern-item {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.avatar {
  width: 40px; /* 头像宽度 */
  height: 40px; /* 头像高度 */
  border-radius: 50%; /* 圆形头像 */
  margin-right: 10px;
}

.username {
  font-size: 16px; /* 用户名字体大小 */
}
</style>
