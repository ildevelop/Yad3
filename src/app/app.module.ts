import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApartmentSearch } from './apartment-search.component/apartment-search.component';
import { SearchResultComponent } from './search-result.component/search-result.component';

import { AppRoutingModule } from './app-routing.module'
import {AgmCoreModule} from "angular2-google-maps/core";
import {GoogleApiService} from "./google.api.service";


@NgModule({
  declarations: [
    AppComponent,
    ApartmentSearch,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGMPl8D-INaWq3oCkDsoclai_-VO8BEks',
    })
  ],
  providers: [GoogleApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

