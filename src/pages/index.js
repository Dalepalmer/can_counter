import React from 'react'
import Link from 'gatsby-link'
import Doughnut from 'react-chartjs-2'
const chartOptions = {
          responsive: true,
          legend: {
            display: false
          },
          animation: {
            duration: 1200,
            easing: 'easeOutBack'
          },
          labels: {
            display: false
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
                    label += ' : ' + Math.abs(Math.round(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] / total * 100))
                    label += '%'
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
const chartData = {labels: ["Cans in dollars"],
    datasets: [

    {data: [10],
    labels: "Cans in dollars"}
    ]}

const IndexPage = () => (
  <div>
    <h1>Can Counter!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Doughnut data={chartData} options={chartOptions}  />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
