import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FoodpageComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
