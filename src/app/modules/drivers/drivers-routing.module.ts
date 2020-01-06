import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriversComponent } from './drivers/drivers.component';
import { DriverComponent } from './driver/driver.component';

const routes: Routes = [{
    path: 'drivers',
    component: DriversComponent
}, {
    path: 'drivers/:id',
    component: DriverComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class DriversRoutingModule { }