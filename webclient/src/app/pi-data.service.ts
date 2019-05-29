import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';

@Injectable()
export class PiDataService {

  private API_URL = environment.apiUrl + 'pidata/'

  constructor(private http: Http) { }

  getDevicePiData(deviceId: any): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      this.http.get(this.API_URL + deviceId)
      .toPromise()
      .then(res => {
        resolve(res.json())
      })
      .catch(err => console.log(err))
    })
  }

}
