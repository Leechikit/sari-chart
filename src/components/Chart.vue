<template>
  <div class="chart">
    <v-chart :options="option" theme="light"></v-chart>
  </div>
</template>
<script>
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import exceldata from "@/helper/tranform";
export default {
  name: "Chart",
  data() {
    return {
      resource: exceldata.cityAddup,
      checkAll: false,
      checkedCities: ["全国", "湖北省", "广东省"],
      isIndeterminate: true
    };
  },
  computed: {
    city() {
      return this.resource.slice(1).map(item => item[0]);
    },
    option() {
      return {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          selector: [
            {
              type: "all or inverse",
              // 可以是任意你喜欢的 title
              title: "全选"
            }
          ],
          data: this.resource.slice(1).map(item => item[0]),
          width: "90%",
          selected: {
            全国: true,
            湖北省: true,
            广东省: true
          }
        },
        grid: {
          left: "5%",
          right: "4%",
          bottom: "3%",
          top: "10%"
          // containLabel: true
        },
        xAxis: {
          type: "category",
          data: this.resource[0]
            .slice(1, this.resource[0].length - 1)
            .map(date => date.replace(/(\d+)年(\d+)月(\d+)日/, "$2/$3"))
        },
        yAxis: {
          type: "value"
        },
        series: this.resource
          .slice(1)
          // .filter(item => this.checkedCities.includes(item[0]))
          .map(item => {
            return {
              name: item[0],
              data: item.slice(1, item.length - 1),
              type: "line",
              smooth: true
            };
          })
      };
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style lang="scss">
.chart {
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw;
}
</style>
<style>
.echarts {
  width: 90vw !important;
  height: 90vh !important;
}
</style>
