import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '',component:DashboardComponent},
    ])
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
