<template>
  <div class="Chart">
    <h1 style="font-size: 2em" >WorkingTimes Average</h1>
    <div class="d-flex">
      <bar-example class="w-50"></bar-example>
      <doughnut-example class="w-50"></doughnut-example>
    </div>
  </div>
</template>

<script>
import BarExample from '@/service/BarChart.js';
import DoughnutExample from '@/service/DoughnutChart.js';

export default {
  name: 'ChartManager',
  components: {
    BarExample,
    DoughnutExample
  }
}
</script>