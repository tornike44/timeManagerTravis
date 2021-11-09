import { Bar } from 'vue-chartjs';

export default {
  extends: Bar ,
  mounted () {
    this.renderChart({
      labels: ['Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'My WorkingTimes',
          backgroundColor: '#006994 ',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ],
    },
    {
      responsive: true, 
      maintainAspectRatio: false, 
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            steps: 10,
            stepValue: 5,
            max: 100
          }
        }]
      }
    })
  }
}