import { Component } from '@angular/core';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css']
})

export class FlightSearchComponent{
    flightSearchParams = {
        from:'',
        to:'',
        departing:'',
        returning:''
    }

    search():void{
        console.log(this.flightSearchParams)
    }
    
}