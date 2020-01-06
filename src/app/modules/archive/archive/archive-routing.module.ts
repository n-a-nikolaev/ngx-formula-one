import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchiveComponent } from './archive.component';

const routes: Routes = [{
    path: 'archive',
    component: ArchiveComponent
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class ArchiveRoutingModule { }