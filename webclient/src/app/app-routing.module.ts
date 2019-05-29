import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { DeviceDataComponent } from './device-data/device-data.component'
import { NewDeviceComponent } from './new-device/new-device.component'
import { DevicePiDataComponent } from './device-pi-data/device-pi-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'device/edit/:id', component: DeviceDataComponent },
  { path: 'device/add', component: NewDeviceComponent },
  { path: 'device/view/:id', component: DevicePiDataComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
