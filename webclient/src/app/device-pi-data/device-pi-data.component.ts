import { Component, OnInit } from '@angular/core';
import { PiDataService } from '../pi-data.service';
import { ActivatedRoute } from '@angular/router';
import { Chart,ChartData } from '../device'
import { LineChartComponent } from './line-chart/line-chart.component'

@Component({
  selector: 'app-device-pi-data',
  templateUrl: './device-pi-data.component.html',
  styleUrls: ['./device-pi-data.component.css']
})
export class DevicePiDataComponent implements OnInit {

  private piDatas: any;
  public chart: Chart;

  private temperatures = Array<any>();
  private humidities = Array<any>();
  private labels = Array<any>();

  constructor(private _PiDataService: PiDataService,
              private route: ActivatedRoute) { 
                this.chart = {
                  labels: [],
                  chartsData: [{
                    label: '',
                    data: []
                  }]
                }
              }

  async ngOnInit() {
    const id = this.route.snapshot.url[2].path;
    await this._PiDataService.getDevicePiData(id).then(piData => {
      this.piDatas = piData;
    })
    console.log(this.piDatas)
    
    await this.piDatas.forEach(data => {
      this.temperatures.push(data.temperature);
      this.humidities.push(data.humidity);
      this.labels.push(data.created_at)
    });
    console.log(this.labels)
    this.chart =  {
      labels: this.labels,
      chartsData: [
        {
          label: 'temperature',
          data: this.temperatures
        },{
          label: 'humidity',
          data: this.humidities
        }
      ]
    }
    console.log(this.chart)
  }

}
