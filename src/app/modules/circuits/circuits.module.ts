import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CircuitsComponent } from './circuits/circuits.component';
import { CircuitComponent } from './circuit/circuit.component';
import { CircuitsRoutingModule } from './circuits-routing.module';

@NgModule({
  declarations: [
    CircuitsComponent,
    CircuitComponent
  ],
  imports: [
    CommonModule,
    CircuitsRoutingModule
  ]
})
export class CircuitsModule { }
