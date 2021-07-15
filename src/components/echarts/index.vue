<template>
  <div :id="docName" style="width: 600px;height:400px;"></div>
</template>

<script>
import { computed, onMounted } from "vue";
import { option } from "./config";
import * as echarts from "echarts";
export default {
  props: {
    echartsName: {
      type: String,
      default: "1",
      required: true
    }
  },
  setup(props) {
    const docName = computed(() => `echarts-${props.echartsName}`);
    const CreateEchart = () => {
      let myChart = echarts.init(document.getElementById(docName.value));
      myChart.setOption(option);
    };
    onMounted(() => CreateEchart());
    return {
      docName
    };
  }
};
</script>

<style lang="scss" scoped>
</style>