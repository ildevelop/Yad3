import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Apartment } from '../apartment';

export class SearchService {
    private flights: Apartment[];
    constructor(private _http:Http){

    }
    search(url: string):Observable<Apartment[]>{
        return this._http.get(url)
                         .map((response:Response) => <Apartment[]> response.json())
                         .do(data => this.flights = data)                    
    }

}