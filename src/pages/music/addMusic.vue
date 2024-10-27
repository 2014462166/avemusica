<script setup>

import {UploadFilled} from "@element-plus/icons-vue";
import Mysidebar from "@/components/sidebar/mysidebar.vue";
import {ElMessage} from "element-plus";
import {ref} from "vue";
import {uploadImage} from "@/api/tool.ts";
import {UpdateUserInfo, userInfo} from "@/api/user.ts";
import {UpdateMusicInfo, uploadMusic} from "@/api/music.ts";
import {router} from "@/router/index.ts";



let musicName = ref("")
let author = ref("")
let description = ref("")
let username =ref("")
let avatarUrl = ref("")
const dialog = ref(false)
const loading = ref(false)
// 存返回的Url
const musicURLs = ref([] );
let timer


const formLabelWidth = '80px'
// v-model 绑定file-list
const musicFileList = ref([] );
function handleExceed() {
  ElMessage.warning(`当前限制选择 1 个文件`);
}
function uploadHttpRequest() {
  return new XMLHttpRequest();
}
async function onClick() {
  await loopUpload();
  updateInfo();
  loading.value = true
  setTimeout(() => {
    loading.value = false
    dialog.value = false
  }, 400)
  await router.push({path:"/home"})
}


const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
//提交信息
function updateInfo()
{
  userInfo().then(res=>{
    avatarUrl.value = res.data.result.imgUrl;
  })
  UpdateMusicInfo({
    musicName:musicName.value,
    description:description.value,
    author:author.value,
    username:username.value,
    musicUrl:musicURLs.value[0],
    imgUrl:avatarUrl.value,
    createTime:''
  })
      .then(res=>{
        if (res.data.code === '000') {
          ElMessage({
            message: "上传成功",
            type: 'success',
            center: true,
          })
        } else if (res.data.code === '400') {
          ElMessage({
            message: res.data.msg,
            type: 'error',
            center: true,
          })
        }

      })
}
async function loopUpload() {
  for (let music of musicFileList.value) {
    let formData = new FormData();
    formData.append('file', music.raw);
    const res = await uploadMusic(formData);
    musicURLs.value.push(res.data.result);
  }
}

</script>

<template>
  <el-container>
    <mysidebar/>
    <el-main>
      <div class="div">
        <el-form >

          <el-form-item label="音乐文件" :label-width="formLabelWidth">
            <el-upload
                v-model:file-list="musicFileList"
                :limit="1"
                :on-exceed="handleExceed"
                :http-request="uploadHttpRequest"
                drag
            >
              <el-icon class="el-icon--upload">
                <upload-filled/>
              </el-icon>
              <div class="el-upload__text">
                将文件拖到此处或单击此处上传。仅允许上传一份文件。
              </div>
            </el-upload>
          </el-form-item>




          <el-form-item label="曲名" :label-width="formLabelWidth">
            <el-input v-model="musicName" autocomplete="off" />
          </el-form-item>
          <el-form-item label=作者 :label-width="formLabelWidth">
            <el-input v-model="author" autocomplete="off" />
          </el-form-item>

          <el-form-item label="介绍" :label-width="formLabelWidth">
            <el-input v-model="description" autocomplete="off" />
          </el-form-item>






        </el-form>
        <div >
          <el-button @click="cancelForm">取消</el-button>
          <el-button   type="primary" :loading="loading" @click="onClick">
            {{ loading ? '提交中...' : '提交' }}
          </el-button>
        </div>
      </div>
    </el-main>
    </el-container>

</template>

<style scoped>

.div{

  width: 60%;
  height: 80%;

  /*此元素会作为一个表格单元格显示
  （类似 <td> 和 <th>）*/
  display: table;
  /*垂直居中 */
  vertical-align: middle;
  /*水平居中*/
  text-align: center;
  margin: auto
}
</style>