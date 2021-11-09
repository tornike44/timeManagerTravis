import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut ,
  mounted () {
    this.renderChart({
      labels: ['Extra Hours', 'Normal Hours', 'Night Hours'],
      datasets: [
        {
          data: [10, 50, 30],
          backgroundColor: ["red","blue","yellow"]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}