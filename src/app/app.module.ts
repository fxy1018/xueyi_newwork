import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

//Import the Http Module and Data Service
import { HttpModule } from '@angular/http';
//Import credit card module
// import { NgXCreditCardsModule } from 'ngx-credit-cards';
// import { CreditCardDirectivesModule } from 'ng2-cc-library'

import { DataService } from './data.service';
import { DashboardService } from './dashboard.service';
import { MenuService } from './menu.service';
import { CustomerService } from "./customer.service";

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerSignupComponent } from './customer/customer-signup/customer-signup.component';
import { ProfileComponent } from './customer/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerLoginComponent,
    MenuComponent,
    CustomerSignupComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
      HttpModule,
      FormsModule,
      AppRoutingModule,
    // NgXCreditCardsModule,
    // CreditCardDirectivesModule,

  ],
  providers: [DataService, DashboardService, MenuService, CustomerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
