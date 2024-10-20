<script setup>
import mySidebar from "@/components/sidebar/mysidebar.vue";
import {ElDrawer,ElMessageBox} from 'element-plus'
import {ref,reactive} from "vue";
import {
  Edit,
  Female,
  Iphone, Male,
  OfficeBuilding, QuestionFilled,
  User,
} from '@element-plus/icons-vue';

import img_URL from "@/assets/fulilian.jpg";
let username = ref("132131232")
let telephone = ref("1234567890")
let nickname = ref("TheUndertaker")
let address = ref("中国南京")
let sex = ref("unknown")
let avatarUrl = ref("")
const dialog = ref(false)
const loading = ref(false)
const formLabelWidth = '80px'
let timer


const onClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    dialog.value = false
  }, 400)
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
}

</script>

<template>
  <el-container>
    <my-sidebar/>
    <el-main>
      <el-avatar :src="img_URL"  :fit="'fill'" :size="80"/>
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
            <el-button type="primary" :loading="loading" @click="onClick">
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
              <el-icon :style="iconStyle">
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