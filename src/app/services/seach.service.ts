import { Http } from '@angular/http';

export class Search{
    constructor(private http:Http){

    }
    search(url: string){
        return this.http
                    .get(url)
                    
    }
}