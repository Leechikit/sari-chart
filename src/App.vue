<template>
  <div id="app">
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./components/Chart.vue";

export default {
  name: "app",
  components: {
    Chart
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
}
</style>
