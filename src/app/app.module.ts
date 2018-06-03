import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HomeComponent } from './home/home.component';

import { QuotesService } from './quotes.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuotesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuotesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
