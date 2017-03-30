import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApartmentSearch } from './apartment-search.component/apartment-search.component';
import { SearchResultComponent } from './search-result.component/search-result.component';

import { AppRoutingModule } from './app-routing.module'
import {AgmCoreModule} from "angular2-google-maps/core";

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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBGMPl8D-INaWq3oCkDsoclai_-VO8BEks'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
