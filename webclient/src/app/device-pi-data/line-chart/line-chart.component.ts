import { Device, Chart, ChartData } from './../../device';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() chart: Chart;

  // private labels: string[];
  // private chartData: ChartData;
  private Chart: Chart;
  private CHART: Chart;

  constructor() {
    this.Chart = {
      labels: [],
      chartsData: [{
        label: '',
        data: []
      }]
    }

    this.CHART = {
      labels: [],
      chartsData: [{
        label: '',
        data: []
      }]
    }

  }

  ngOnChanges(changes: SimpleChanges) {

    // console.log('changes', changes);
    // this.chart = changes.chart.currentValue;

    // Chart error when receive data

    this.Chart.labels = changes.chart.currentValue.labels;
    this.Chart.chartsData = changes.chart.currentValue.chartsData;

    // Chart success when receive data
    for (let index = 0; index < this.CHART.chartsData.length; index++) {
      this.CHART.chartsData.pop();
    }

    this.CHART.labels = changes.chart.currentValue.labels;

    changes.chart.currentValue.chartsData.forEach(element => {
      this.CHART.chartsData.push(element);
    });
  }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  // MOCKUP DATA

  // labels: string[] =  ['2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z'];

  // // STATIC DATA FOR THE CHART IN JSON FORMAT.
  // chartData: ChartData[] = [
  //   {
  //     label: 'temperature',
  //     data: [3.9, 3.9, 3.3, 3.9, 2, 2, 1.4, 3.9, 4.3, 4.3]
  //   },
  //   {
  //     label: 'humidity',
  //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //   }
  // ];


  // CHART COLOR.
  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(24, 77, 192, 0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(235, 72, 72, 0.212)'
    }
  ]

  // CHART CLICK EVENT.
  onChartClick(event) {
    console.log(event);
  }

}
