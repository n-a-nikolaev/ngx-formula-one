import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitsComponent } from './circuits/circuits.component';
import { CircuitComponent } from './circuit/circuit.component';

const routes: Routes = [{
    path: 'circuits',
    component: CircuitsComponent
}, {
    path: 'circuit/:id',
    component: CircuitComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class CircuitsRoutingModule { }