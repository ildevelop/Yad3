import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Flight } from '../flight';

export class SearchService {
    private flights: Flight[];
    constructor(private _http:Http){

    }
    search(url: string):Observable<Flight[]>{
        return this._http.get(url)
                         .map((response:Response) => <Flight[]> response.json())
                         .do(data => this.flights = data)                    
    }

}