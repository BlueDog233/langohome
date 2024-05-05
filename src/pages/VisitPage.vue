<script setup lang="ts">
import {onMounted} from "vue";
import {getHtml} from "@/base/request/requests.ts";
import {useRoute} from "vue-router";

</script>

<template>
  <iframe style="width: 100%;height: 100%" :src="'http://localhost:8000/api/visit/'+useRoute().path.replace('/visit/','')"></iframe>
</template>

<style >
html{
  background: white;
}
#main{
  all: initial;
}
</style>