import { Device, Chart, ChartData } from './../../device';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() chart: Chart;

  private labels: string[];
  private chartData: ChartData[];

  constructor() {
    // this.chart = {
    //   labels: null,
    //   chartsData: [{
    //     label: '',
    //     data: null
    //   }]
    // }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    // console.log(this.chart);
    // this.chart = changes.chart;
    console.log(changes.chart.currentValue)
    this.labels = changes.chart.currentValue.labels;
    this.chartData = changes.chart.currentValue.chartsData
    console.log(this.labels)
    console.log(this.chartData)
  }

  async ngOnInit() {
    // console.log('hello')
    // console.log(this.chart);
    // this.labels = this.chart.labels;
    // this.chartData = this.chart.chartsData
  }

  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  // labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // // STATIC DATA FOR THE CHART IN JSON FORMAT.
  // chartData = [
  //   {
  //     label: '1st Year',
  //     data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59]
  //   },
  //   {
  //     label: '2nd Year',
  //     data: [47, 9, 28, 54, 77, 51, 24]
  //   }
  // ];


  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }

}
