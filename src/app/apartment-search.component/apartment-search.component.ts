import { Component } from '@angular/core';

import { Apartment } from '../apartment';
import { SearchService } from '../services/seach.service';

@Component({
    selector: 'apartment-search',
    templateUrl: './apartment-search.component.html',
    styleUrls: ['./apartment-search.component.css']
})

export class ApartmentSearch {
    private apiKey = '8DXBNETvTja7I940x28BHwKZ4bxJuYiG';
    
    apartmentSearchParams = {
        address: '',
        minPrice: '',
        maxPrice: '',
    }

    search(): void {
        //connect with SearchService
        console.log(this.searchQueryBuilder())
    }

    searchQueryBuilder(): string {
        return `http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search
                                ?address=${this.apartmentSearchParams.address}&minPrice=${this.apartmentSearchParams.minPrice}
                                &maxPrice=${this.apartmentSearchParams.maxPrice}
                                &number_of_results=3&apikey=${this.apiKey}`
    }

}