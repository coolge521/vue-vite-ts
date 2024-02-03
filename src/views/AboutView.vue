<template>
  <div>
    <el-table :data="tableData?.list" stripe style="width: 100%">
      <el-table-column :prop="c.key" :label="c.name" width="180" v-for="c in columns" :key="c.key" />
    </el-table>
    <el-pagination v-if="tableData?.list?.length" v-model:current-page="params.curPage" :total="tableData.totalCount - 0"
      v-model:page-size="params.pageSize" />
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, computed, watchEffect, watchPostEffect } from 'vue';
import { useRequest, usePagination } from 'vue-request';
import { getSuggestionHall } from '@/api';
import cache from '@/utils/cache';
const params = reactive({
  tokenId: cache.session.get('token'),
  type: 0,
  pageSize: 20,
  curPage: 1
});
const columns = [
  { key: 'serialNumber', name: '单号' },
  { key: 'categoryName', name: '项目大类' },
  { key: 'itemName', name: '项目小类' },
  { key: 'content', name: '留言内容' },
  { key: 'createUserName', name: '发布人' },
  { key: 'deptName', name: '部门' }
];
//const tableData = ref<any>([]);
//无分页请求
//const { data, run } = useRequest(getSuggestionHall);
//run(params);
//const tableData = computed(() => data.value?.body);
//带分页请求
const { data, run, changeCurrent } = usePagination(getSuggestionHall, {
  defaultParams: [params]
});
//run(params);
const tableData = computed(() => {
  return data.value?.body;
});

watch(
  () => params.curPage,
  () => {
    run(params);
  }
);
//通过监听变化赋值
// watch(
//   () => data.value,
//   () => {
//     console.log(data.value);
//     tableData.value = data.value?.body.list;
//   },
//   { deep: true }
// );
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
