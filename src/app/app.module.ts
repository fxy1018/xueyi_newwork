import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

//Import the Http Module and Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { DashboardService } from './dashboard.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { MenuService } from './menu.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerLoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      FormsModule,
      AppRoutingModule,

  ],
  providers: [DataService, DashboardService, MenuService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
