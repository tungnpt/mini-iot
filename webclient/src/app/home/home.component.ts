import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service'
import { Device, marker } from '../device'
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private devices: Array<Device>;
  private lat: number = 20.976044;
  private lng: number = 105.815666;

  private choosedDevice: Device;

  constructor(private _DeviceService: DeviceService) { }

  async ngOnInit() {
    this.devices = await this._DeviceService.getDevices();
  }

  deleteDevice(device: Device){
    console.log(device)
    this.choosedDevice = device;
    // this.devices = this.devices.filter(d => d !== device)
    // this._DeviceService.deleteDevice(device._id)
  }

  delete(device: Device){
    this.devices = this.devices.filter(d => d !== device)
    this._DeviceService.deleteDevice(device._id)
  }

  zoom: number = 16;

  // initial center position for the map

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markers: marker[] = []

}
