<script setup lang="ts">
import {router} from "@/router";
import Mysidebar from "@/components/sidebar/mysidebar.vue";

import {onMounted, toRefs} from "vue";
import {useRoute} from "vue-router";

import {ref} from "vue";
const router =useRoute();
const username = toRefs(router.query.username);

onMounted(()=>{
  console.log(router.query.username)
  console.log(typeof username)

})

</script>

<template>
  <el-container>
    <mysidebar>
      <el-main>
        {{username}}7777777777777668867867878686867868

      </el-main>
    </mysidebar>
  </el-container>
</template>

<style scoped>

</style>