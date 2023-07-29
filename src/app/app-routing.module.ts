import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';

const routes: Routes = [
  {path: '',
    component: CommonLayoutComponent, // Use the common layout for all pages except login and register
    children: [
      // Define other routes here with their respective components
      { path: 'home', component: HomeComponent },
     
      // Add other routes...
    ]
  },
  {path : "login" , component : LoginComponent, canActivate: [AuthGuard]},
  {path : "home" , component : HomeComponent, canActivate: [AuthGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
