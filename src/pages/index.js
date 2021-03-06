import React from 'react'
import Link from 'gatsby-link'
import Doughnut from 'react-chartjs-2'
const chartOptions = {
          responsive: true,
          legend: {
            display: true
          },
          animation: {
            duration: 1200,
            easing: 'easeOutBack'
          },
          labels: {
            display: true
          },
          layout: {
            padding: {
                top: 20,
                bottom: 30
            },
          },
          tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                    var total = (data.datasets[0].data).reduce((a, b) => a + b, 0)
                    var label = data.labels[tooltipItem.index] || '';
                    label += ' : $' +  data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                    label += ' : ' + Math.abs(Math.round(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] / total * 100))
                    label += '%'
                    label += '\n'
                    label += 'Number of cans : ' + Math.round(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] * 10)
                    return label;
                },
             }
          },
          pieceLabel: {
             render: function (args) {
              // args will be something like:
              // { label: 'Label', value: 123, percentage: 50, index: 0, dataset: {...} }
              return args.label + '\n';

              // return object if it is image
              // return { src: 'image.png', width: 16, height: 16 };
            },
            fontFamily: 'Helvetica Neue',
            fontSize: 14,
            position: 'outside',
            textMargin: 10
          },
      }
const chartData = {
    labels: ["Team Matt", "Radon Canyon", "Total", "Goal"],
    datasets: [

    {
      data: [24.40, 0, 24.40, 175.60],
      backgroundColor: ["#0ad1bf", "#ff7e22", "green", "#b0bec5"],
     
    }
    ]}

const IndexPage = () => (
  <div>
    <p>Welcome to our can collection counter.</p>
    <p>A group of friends and I are collecting cans for whimsical things to make our lives more vibrant. Here I will document out process</p>
    <div>

    </div>

    <Doughnut data={chartData} options={chartOptions}  />
  </div>
)

export default IndexPage
