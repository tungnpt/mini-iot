import { Component, OnInit } from '@angular/core';

import { DeviceService } from '../device.service'
import { Device } from '../device'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-device-data',
  templateUrl: './device-data.component.html',
  styleUrls: ['./device-data.component.css']
})
export class DeviceDataComponent implements OnInit {

  private device: Device;
  private id = null;

  constructor(private _DeviceService: DeviceService,
              private route: ActivatedRoute,
              private location: Location) {
    this.device = {
      deviceName: null,
      deviceDescription: null,
      location: null,
      latitude: null,
      longitude: null
    }
  }

  async ngOnInit() {
    this.id = this.route.snapshot.url[2].path;
    this.device = await this._DeviceService.getDevice(this.id)
  }

  async onUpdate(){
    await this._DeviceService.updateDevice(this.id, this.device)
    await this._DeviceService.getDevices();
    this.location.back();
  }

}
