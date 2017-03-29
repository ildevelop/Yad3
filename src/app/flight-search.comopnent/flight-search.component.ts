import { Component } from '@angular/core';

import { Flight } from '../flight';
import { SearchService } from '../services/seach.service';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css']
})

export class FlightSearchComponent{
    private apiKey = '8DXBNETvTja7I940x28BHwKZ4bxJuYiG';
    flightSearchParams = {
        origin:'',
        destination:'',
        departure_date:'',
        return_date:''
    }

    search():void{
        //connect with SearchService
        console.log(this.searchQueryBuilder())
    }

    searchQueryBuilder():string{
        return `http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search
                                ?origin=${this.flightSearchParams.origin}&destination=${this.flightSearchParams.destination}
                                &departure_date=${this.flightSearchParams.departure_date}&return_date=${this.flightSearchParams.return_date}
                                &number_of_results=3&apikey=${this.apiKey}`
    }
    
}