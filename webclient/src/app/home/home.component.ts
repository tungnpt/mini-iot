import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service'
import { Device } from '../device'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private devices: Array<Device>;

  constructor(private _DeviceService: DeviceService) { }

  async ngOnInit() {
    this.devices = await this._DeviceService.getDevices();
  }

  deleteDevice(device: Device){
    console.log(device)
    this.devices = this.devices.filter(d => d !== device)
    this._DeviceService.deleteDevice(device._id)
  }

}
