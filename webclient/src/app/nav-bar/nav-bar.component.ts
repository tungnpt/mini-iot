import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private socket = io("http://localhost:6969");
  // private socket = io("https://project-mini-iot.herokuapp.com");
  private isTurnOn = false;
  private text = "OFF";

  constructor() { }

  ngOnInit() {
    this.socket = io("http://localhost:6969")
    // this.socket = io("https://project-mini-iot.herokuapp.com")
  }

  onSearch(e: Event){
    console.log(e)
  }

  onLight(e: Event){
    this.isTurnOn = !this.isTurnOn;
    if(this.isTurnOn) {
      this.text = "ON";
    } else { this.text = "OFF"; }
    console.log(e)
    if(e){
      this.socket.emit('ledOn', "True")
    }else{
      this.socket.emit('ledOn', "False")
    }
  }

}
