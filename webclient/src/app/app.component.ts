import { Component, OnInit, SimpleChanges } from '@angular/core';
import * as socketIo from 'socket.io-client'
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { DeviceService } from './device.service'
import { Device } from './device'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  socket: socketIo.Socket;
  datas: Array<any>;
  // observer: Observer<any>;

  constructor() {
    this.datas = new Array<any>();
  }

    ngOnInit() {
    // this.socket = socketIo.connect('http://localhost:6969');
    // this.socket.on('data-mockup', (data: any) => {
    //   console.log(data);
    // });
    // this.getDatas().subscribe((data: any) => {
    //   this.datas.push(data);
    //   console.log(this.datas)
    // });;
  }

  public getDatas = () => {
    return Observable.create((observer) => {
      console.log('something wrong');
      
        this.socket.on('data-mockup', (data: any) => {
            console.log(data);
            observer.next(data);
        });
    });
}
}
