<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div>{{ '我是' + route.params.userName + ',你好' }}</div>
  <router-view></router-view>
</template>

<style scoped></style>
