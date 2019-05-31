import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DeviceService } from "./device.service";
import { PiDataService } from "./pi-data.service"
import { HomeComponent } from './home/home.component';
import { DeviceDataComponent } from './device-data/device-data.component';
import { NewDeviceComponent } from './new-device/new-device.component';
import { DevicePiDataComponent } from './device-pi-data/device-pi-data.component'
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LineChartComponent } from './device-pi-data/line-chart/line-chart.component';
import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DeviceDataComponent,
    NewDeviceComponent,
    DevicePiDataComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ChartsModule,
    UiSwitchModule
  ],
  providers: [
    DeviceService,
    PiDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
