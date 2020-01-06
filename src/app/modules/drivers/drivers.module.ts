import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversComponent } from './drivers/drivers.component';
import { DriverComponent } from './driver/driver.component';
import { DriversRoutingModule } from './drivers-routing.module';



@NgModule({
  declarations: [
    DriversComponent,
    DriverComponent
  ],
  imports: [
    CommonModule,
    DriversRoutingModule
  ]
})
export class DriversModule { }
