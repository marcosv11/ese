import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

export default class GraficoMaior extends Component {

   

   constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'Com erro',
              color: '#ff0000',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
              name: 'Sem erro',             
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            options: {
              chart: {
                type: 'bar',
                
                
                height: 350
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
              xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
              },
              
              fill: {
                opacity: 1
              },
              
            },
          
          
          };
        }

     
  render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="bar"  height={350} />
</div>
    
  );
        }
      }

       
       