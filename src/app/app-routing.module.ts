import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {path:'login',component:LoginComponent},
  // {path:'welcome',component:WelcomeComponent},
  
  { path: 'dashboard', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
