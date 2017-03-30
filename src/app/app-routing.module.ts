import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApartmentSearch } from './apartment-search.component/apartment-search.component';
import { SearchResultComponent } from './search-result.component/search-result.component';

const routes: Routes = [
    { path: '', redirectTo: '/search', pathMatch: 'full' },
    { path: 'search', component: ApartmentSearch },
    { path: 'results', component: SearchResultComponent},
]


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ] 
})

export class AppRoutingModule {

}