import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { SignupPageComponent } from './customer/signup-page/signup-page.component';
import { LoginPageComponent } from './shared-component/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './customer/menu/menu.component';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    LoginPageComponent ,
    SignupPageComponent,
    MenuComponent,
  
     ],
  imports: [
    BrowserModule,
    FormsModule,  
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // ToastrModule.forRoot({ positionClass: 'inline' }), 
    BrowserAnimationsModule,
  
  ],
  providers: [],

bootstrap: [AppComponent]
})
export class AppModule { }
