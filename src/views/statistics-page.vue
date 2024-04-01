<script setup lang="ts">
import { onMounted } from 'vue';
import { getCategoryData } from '@/api';
import cache from '@/utils/cache';
import echartsConfig from '@/utils/echarts-config.js';
import * as echarts from 'echarts';

const handleScreenAuto = () => {
  const designDraftWidth = 1920; //设计稿的宽度
  const designDraftHeight = 1080; //设计稿的高度
  //根据屏幕的变化适配的比例
  const scale =
    document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight
      ? document.documentElement.clientWidth / designDraftWidth
      : document.documentElement.clientHeight / designDraftHeight;
  //缩放比例
  (document.querySelector('#screen') as any).style.transform = `scale(${scale}) translate(0)`;
};
onMounted(() => {
  //handleScreenAuto();
  //绑定自适应函数   ---防止浏览器栏变化后不再适配
  //window.onresize = () => handleScreenAuto();
});
window.onresize = () => {
  categoryChart.resize();
};
const params = {
  tokenId: cache.session.get('token'),
  dateType: 4
};
let categoryChart: echarts.ECharts;
getCategoryData(params).then((res) => {
  initChart(res.body);
});
const initChart = (data: any) => {
  const values = data.map((item: any) => {
    return { name: item.name, value: item.count };
  });
  const names = data.map((item: any) => item.name);
  let colors = ['#8080ff', '#70b603', '#02a7f0', '#f59a23'];
  let legend = {
    type: 'scroll',
    textStyle: { color: '#666666', fontSize: 12, fontWeight: 400 },
    right: '5%',
    top: 'middle',
    orient: 'vertical',
    show: true,
    itemWidth: 15,
    itemHeight: 10,
    height: '95%'
  };
  let labelLine = {
    show: false
  };
  let label = {
    show: false
  };
  const option = echartsConfig.annularChartOption(values, colors, legend, ['45%', '50%'], ['60%', '80%'], labelLine, label);
  categoryChart = echarts.init(document.getElementById('category-chart'));
  categoryChart.setOption(option);
};
</script>

<template>
  <div class="screen-root">
    <!--    <div class="screen" id="screen">-->
    <!--      <div id="category-chart" style="width: 100%; height: 100%"></div>-->
    <!--    </div>-->
    <ElRow>
      <ElCol :span="8" style="background: red; height: 100%">
        <ElRow style="background: blue">
          <div id="category-chart" style="width: 100%; height: 100%"></div>
        </ElRow>
        <ElRow style="background: #b3d4fc"></ElRow>
        <ElRow style="background: #0080ff"></ElRow>
      </ElCol>
      <ElCol :span="8" style="background: orange">
        <ElRow style="background: black"></ElRow>
        <ElRow style="background: #2b3b4e"></ElRow>
      </ElCol>
      <ElCol :span="8" style="background: green">
        <ElRow style="background: orangered"></ElRow>
        <ElRow style="background: orange"></ElRow>
        <ElRow style="background: orchid"></ElRow>
      </ElCol>
    </ElRow>
  </div>
</template>

<style scoped lang="scss">
.screen-root {
  height: 100vh;
  width: 100vw;
  min-width: 1024px;
  min-height: 768px;
  .screen {
    width: 100%;
    height: 100%;
    transform-origin: 0 0;
    //position: absolute;
    //left: 50%;
  }
}
.el-row {
  height: 100%;
  .el-col:nth-of-type(odd) {
    .el-row {
      height: 33.33%;
    }
  }
  .el-col:nth-of-type(2) {
    .el-row {
      height: 50%;
    }
  }
}
</style>
