<script setup lang="ts">
import {onMounted} from "vue";
import {getHtml} from "@/base/request/requests.ts";
import {useRoute} from "vue-router";

onMounted(()=>{
  getHtml(useRoute().path.replace("/visit/",""),"main")
})
</script>

<template>
<div id="main">

</div>
</template>

<style scoped>
#main{
  all: initial;
}
</style>