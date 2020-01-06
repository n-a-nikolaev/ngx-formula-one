import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  EventComponent,
  PieChartComponent,
  StandingsTableComponent,
  CountdownComponent
} from './components';

@NgModule({
  declarations: [
    EventComponent,
    PieChartComponent,
    StandingsTableComponent,
    CountdownComponent
  ],
  imports: [
    CommonModule
  ],
})
export class SharedModule { }
