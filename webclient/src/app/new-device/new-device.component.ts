import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device, marker } from '../device';
import { Location } from '@angular/common';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  private device: Device;
  private zoom: number = 2;

  constructor(private _DeviceService: DeviceService,
              private location: Location) {
    this.device = {
      deviceName: null,
      deviceDescription: null,
      location: null,
      latitude: null,
      longitude: null
    }
  }

  ngOnInit() {
  }

  async saveDevice(){
    console.log(this.device)
    await this._DeviceService.createDevice(this.device);
    await this._DeviceService.getDevices();
    this.location.back();
  }

  // initial center position for the map

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.device.latitude = $event.coords.lat;
    this.device.longitude = $event.coords.lng;
  }

  markerDragEnd($event: MouseEvent) {
    this.device.latitude = $event.coords.lat;
    this.device.longitude = $event.coords.lng;
  }

}
