import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Device } from '../device';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit {

  private device: Device;

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

  saveDevice(){
    console.log(this.device)
    this._DeviceService.createDevice(this.device);
    this._DeviceService.getDevices();
    this.location.back();
  }

}
