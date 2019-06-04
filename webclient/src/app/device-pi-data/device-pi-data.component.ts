import { Component, OnInit } from '@angular/core';
import { PiDataService } from '../pi-data.service';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartData, marker, Device } from '../device';
import { MouseEvent } from '@agm/core';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-device-pi-data',
  templateUrl: './device-pi-data.component.html',
  styleUrls: ['./device-pi-data.component.css']
})
export class DevicePiDataComponent implements OnInit {

  private device: Device;
  private piDatas: any;
  public chart: Chart;
  private zoom: number = 14;
  private id = null;

  private temperatures = Array<number>();
  private humidities = Array<number>();
  private labels = Array<string>();

  constructor(private _PiDataService: PiDataService,
              private route: ActivatedRoute,
              private _DeviceService: DeviceService) {
                this.chart = {
                  labels: [],
                  chartsData: [{
                    label: '',
                    data: []
                  }]
                }

                this.device = {
                  deviceName: '',
                  latitude: null,
                  longitude: null
                }
              }

  async ngOnInit() {

    this.id = this.route.snapshot.url[2].path;
    this.device = await this._DeviceService.getDevice(this.id);

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
    // console.log(this.labels)
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

    // this.lat = this.device.latitude;
    // this.lng = this.device.longitude;
  }

  // initial center position for the map

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

}
