import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightSearchComponent } from './flight-search.comopnent/flight-search.component';
import { HotelsSearchComponent } from './hotels-search.component/hotels-search.component'

const routes: Routes = [
    { path: '', redirectTo: '/flights', pathMatch: 'full' },
    { path: 'flights', component: FlightSearchComponent },
    {path:'hotels', component:HotelsSearchComponent}
]


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ] 
})

export class AppRoutingModule {

}