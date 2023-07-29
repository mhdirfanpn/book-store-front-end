import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptor } from './interceptor/auth.interceptor';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CommonLayoutComponent } from './components/common-layout/common-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { CurrencyConversionPipe } from './pipes/currency-conversion.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CommonLayoutComponent,
    NavbarComponent,
    BookDetailsComponent,
    CurrencyConversionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
   {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
