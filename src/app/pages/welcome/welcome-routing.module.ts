import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '',component:WelcomeComponent,pathMatch: 'full' },
  {path:'home',loadChildren:()=>import('./../../dashboard/dashboard.module').then(m => m.DashboardModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
