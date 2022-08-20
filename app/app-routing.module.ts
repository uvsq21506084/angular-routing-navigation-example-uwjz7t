import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BikeInfoComponent } from './bikesinfo/bikesinfo.component';
import { BikeComponent } from './bikes/bikes.component';
 
const routes: Routes = [
  { path: 'information/:id', component: BikeInfoComponent },
  { path: 'bikes', component: BikeComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
