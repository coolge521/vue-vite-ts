<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ElIcon><i-ep-edit></i-ep-edit></ElIcon>
    <ElButton>222</ElButton>
    <ElRadioButton>2</ElRadioButton>
  </div>
</template>
<script setup lang="ts">
import { useRequest } from 'vue-request';
import { getSuggestionHall } from '@/api';
import cache from '@/utils/cache';
const params = {
  curPage: 1,
  tokenId: cache.session.get('token'),
  type: 0
};
const { data, run } = useRequest(getSuggestionHall, { defaultParams: [params] });
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
