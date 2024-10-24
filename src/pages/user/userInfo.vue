<script setup >
import mySidebar from "@/components/sidebar/mysidebar.vue";
import {ElDrawer, ElMessage, ElMessageBox} from 'element-plus'
import {ref,onMounted} from "vue";
import {
  Edit,
  Female,
  Iphone, Male,
  OfficeBuilding, QuestionFilled, UploadFilled,
  User,
} from '@element-plus/icons-vue';
import img_URL from "@/assets/fulilian.jpg";
import {UpdateUserInfo, userInfo} from "@/api/user.ts";
import {router} from "@/router/index.ts";
import {uploadImage} from "@/api/tool.ts";



let username = ref("")
let telephone = ref("")
let nickname = ref("")
let address = ref("")
let sex = ref("unknown")
let avatarUrl = ref("")
const dialog = ref(false)
const loading = ref(false)
const formLabelWidth = '80px'
// v-model 绑定file-list
const imageFileList = ref([] );

// 存返回的imgUrl
const imgURLs = ref([] );
let timer


async function onClick() {
  await loopUpload();
  updateInfo();
  loading.value = true
  setTimeout(() => {
    loading.value = false
    dialog.value = false
  }, 400)
}

async function loopUpload() {
  for (let image of imageFileList.value) {
    let formData = new FormData();
    formData.append('file', image.raw);
    const res = await uploadImage(formData);
    imgURLs.value.push(res.data.result);
  }
}


//获取用户信息
function getUserInfo()
{
  userInfo().then(res=>{
    username.value = res.data.result.username;
    nickname.value = res.data.result.nickname;
    sex.value = res.data.result.sex;
    address.value= res.data.result.address;
    telephone.value = res.data.result.telephone;
    avatarUrl.value = res.data.result.imgURL
  })
}
//更新用户信息
function updateInfo()
{
 UpdateUserInfo({
   username:username.value,
   nickname:nickname.value,
   sex:sex.value,
   address:address.value,
   telephone:telephone.value,
   imgURL:imgURLs.value[0]
 })
     .then(res=>{
       if (res.data.code === '000') {
         ElMessage({
           message: "修改成功",
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
       getUserInfo();
     })
}
function handleExceed() {
  ElMessage.warning(`当前限制选择 1 个文件`);
}
function uploadHttpRequest() {
  return new XMLHttpRequest();
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}

const handleClose = (done) => {
  if (loading.value) {
    return
  }
  ElMessageBox.confirm('Do you want to submit?')
      .then(() => {
        loading.value = true
        timer = setTimeout(() => {
          done()
          // 动画关闭需要一定的时间
          setTimeout(() => {
            loading.value = false
          }, 400)
        }, 2000)
      })
      .catch(() => {
        // catch error
      })
};
onMounted(()=>{
  getUserInfo();
});


</script>

<template>
  <el-container>
    <my-sidebar/>
    <el-main>
      <el-avatar :src="avatarUrl"  :fit="'fill'" :size="80"/>
      <el-button color="#39C5BB"  @click="dialog=true" round >
        <el-text style="color: white">编辑信息</el-text>
        <el-icon color="white">
          <Edit/>
        </el-icon>
      </el-button>

      <el-drawer
        v-model="dialog"
        title="修改信息"
        direction="rtl"
        :before-close="handleClose"
        class="demo-drawer"
      >
        <div class="demo-drawer__content">


          <el-form >

            <el-form-item label="头像">
              <el-upload
                  v-model:file-list="imageFileList"
                  :limit="1"
                  :on-exceed="handleExceed"
                  class="upload-demo input"
                  list-type="picture"
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




            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="username" autocomplete="off" />
            </el-form-item>

            <el-form-item label="昵称" :label-width="formLabelWidth">
              <el-input v-model="nickname" autocomplete="off" />
            </el-form-item>

            <el-form-item label="电话" :label-width="formLabelWidth">
              <el-input v-model="telephone" autocomplete="off" />
            </el-form-item>

            <el-form-item label="地址" :label-width="formLabelWidth">
              <el-input v-model="address" autocomplete="off" />
            </el-form-item>

            <el-form-item label="性别" :label-width="formLabelWidth">
              <el-select
                  v-model="sex"
                  placeholder="Please select sex"
              >
                <el-option label="男" value="male" />
                <el-option label="女" value="female" />
                <el-option label="不愿透露" value = "unknown"/>
              </el-select>
            </el-form-item>
          </el-form>
          <div class="demo-drawer__footer">
            <el-button @click="cancelForm">Cancel</el-button>
            <el-button   type="primary" :loading="loading" @click="onClick">
              {{ loading ? 'Submitting ...' : 'Submit' }}
            </el-button>
          </div>
        </div>
      </el-drawer>




      <el-descriptions title="个人信息" class="margin-top"
                       :column="3"
                       border>
        <el-descriptions-item>
          <template #label>
            <div class="cell-item">
              <el-icon >
                <user/>
              </el-icon>
              Username
            </div>
          </template>
          {{ username }}
        </el-descriptions-item>

        <el-descriptions-item label="Telephone">
          <template #label>
            <div class="cell-item">
              <el-icon >
                <iphone />
              </el-icon>
              Telephone
            </div>
          </template>
          {{ telephone }}
        </el-descriptions-item>

        <el-descriptions-item label="Nickname">
          <template #label>
            <div class="cell-item">
              <el-icon >
                <user/>
              </el-icon>
              Nickname
            </div>
          </template>
          {{ nickname }}
        </el-descriptions-item>

        <el-descriptions-item label="sex">
          <template #label>
            <div class="cell-item" >
              <el-icon >
                <user/>
              </el-icon>
              sex
            </div>
          </template>
          <el-icon >
            <Male v-if="sex==='male'"/>
            <Female v-if="sex==='female'"/>
            <QuestionFilled v-if="sex==='unknown'"/>
          </el-icon>
        </el-descriptions-item>



        <el-descriptions-item label="Address">
          <template #label>
            <div class="cell-item">
              <el-icon >
                <office-building />
              </el-icon>
              Address
            </div>
          </template>
          {{ address }}
        </el-descriptions-item>


      </el-descriptions>
    </el-main>
  </el-container>

</template>

<style scoped>
.cell-item {
  display: flex;
  align-items: center;
}

</style>