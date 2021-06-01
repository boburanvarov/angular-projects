import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/ApiService';
import { HelloComponent } from './components/hello/hello.component';
import { FootballComponent } from './components/football/football.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { Shopping2Component } from './components/shopping2/shopping2.component';
import { CashComponent } from './components/cash/cash.component';
import { FormComponent } from './components/contact-form/form.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FootballComponent,
    HomeComponent,
    MenuComponent,
    Shopping2Component,
    CashComponent,
    FormComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
