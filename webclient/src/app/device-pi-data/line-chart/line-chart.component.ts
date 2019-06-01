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
    // console.log(this.Chart);
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
    // console.log(this.chart);
    // console.log(this.chart.chartsData[0]);
    // this.chartData = this.chart.chartsData[1];
    // console.log(changes.chart.currentValue)
    this.Chart.labels = changes.chart.currentValue.labels;
    this.Chart.chartsData = changes.chart.currentValue.chartsData;
    console.log(this.Chart.chartsData);
    console.log(this.chartData);


    this.CHART.labels = changes.chart.currentValue.labels;
    this.CHART.chartsData = [
      {
        label: changes.chart.currentValue.chartsData[0].label,
        data: changes.chart.currentValue.chartsData[0].data
      },
      {
        label: changes.chart.currentValue.chartsData[1].label,
        data: changes.chart.currentValue.chartsData[1].data
      }
    ]
    console.log(this.CHART.chartsData);

    if(JSON.stringify(this.Chart.chartsData) === JSON.stringify(this.chartData)) {
      console.log(true);
    }
    else console.log(false);
    this.labels;

  }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels: string[] =  ['2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z'];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData: ChartData[] = [
    {
      label: 'temperature',
      data: [3.9, 3.9, 3.3, 3.9, 2, 2, 1.4, 3.9, 4.3, 4.3]
    },
    {
      label: 'humidity',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ];


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
