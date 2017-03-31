/**
 * Created by ilya on 31/03/2017.
 */
import { Injectable } from '@angular/core';
import axios from 'axios';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
 import 'rxjs/add/operator/trow';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class GoogleApiService {

  public get_location_response(addressName: string):Promise<string>   {
    let valid;
    let isvalid;
    let value;
    isvalid = axios.post('/isgoodword', {
      address: addressName
    },)
      .then(function (response) {
        return new Promise<string>((resolve, reject) => {
          // value = response["data"]["rsp"]["found"]
          // resolve(value);
          return response;
        });
      })
      .catch(function (error) {
        console.log('error is '+error);
        valid = false;
        return new Promise<string>((resolve, reject) => {
          reject("0");
        });
      });
    return isvalid;
  }

}
