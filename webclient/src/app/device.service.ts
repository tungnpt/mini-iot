import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';
import { Device } from './device'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeviceService {

  private API_URL = environment.apiUrl + 'device/';

  constructor(private http: Http) { }

  getDevices(): Promise<Array<Device>>{
    return new Promise((resolve, reject) => { 
      this.http.get(this.API_URL)
      .toPromise()
      .then(res => {
        resolve(res.json())
      })
      .catch(err => console.log(err))
  })
  }

  createDevice(device: Device): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.http.post(this.API_URL, device)
      .subscribe(res => {
        resolve(true);
      }, err => reject(err))
    })
  }

  getDevice(deviceId: any): Promise<Device> {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + deviceId)
      .toPromise()
      .then(res => {
        resolve(res.json())
      })
      .catch(err => console.log(err))
    })
  }

  updateDevice(deviceId: any, device: Device): Promise<boolean>{
    return new Promise((resolve, reject) => {
      this.http.put(this.API_URL + deviceId, device)
      .subscribe(res => {
        resolve(true)
      },err => reject(err))
    })
  }

  deleteDevice(deviceId: any): Promise<null>{
    return new Promise((resolve, reject) => {
      this.http.delete(this.API_URL + deviceId)
      .subscribe(res =>  null, err => reject(err))
    })
  }
}
