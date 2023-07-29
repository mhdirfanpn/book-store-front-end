import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: CommonLayoutComponent, // Use the common layout for all pages except login and register
    children: [
      // Define other routes here with their respective components
      { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
      { path: "book/:id", component: BookDetailsComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: "login", component: LoginComponent, canActivate: [AuthGuard] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
