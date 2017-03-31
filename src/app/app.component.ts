import {
  Component,
  NgModule
} from '@angular/core';

import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AgmCoreModule
} from 'angular2-google-maps/core';
import {GoogleApiService} from "./google.api.service";
import {Response} from "@angular/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 8;
  address: string;
  // initial center position for the map
  lat: number = 32.085300;
  lng: number = 34.781768;

  constructor(public googleApiService: GoogleApiService){}

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }


  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


  public getXY(address:string){
    this.googleApiService.get_location_response(address).subscribe(res => {
      this.setCoordinates(res)
    });
    //   console.log("response="+response)
    // response = this.googleApiService.getResponse();
    // console.log("response2="+response)
    // this.lat = response["results"][0]["geometry"]["bounds"]["northeast"]["lat"]
    // this.lng = response["results"][0]["geometry"]["bounds"]["northeast"]["lng"]
  }

  // mapClicked($event: MouseEvent) {
  //   let object =   {
  //     lat: $event.screenY,
  //     lng: $event.screenX,
  //     label: 'N',
  //     draggable: true
  //   }
  //   this.markers.push(object);
  // }

  markers: marker[] = [
    {
      lat: 31.804381,
      lng: 34.655314,
      label: 'A',
      draggable: true
    },
    {
      lat: 35.804381,
      lng: 33.804381,
      label: 'B',
      draggable: false
    },
    {
      lat: 33.899981,
      lng: 36.895982,
      label: 'C',
      draggable: true
    }
  ]

  private setCoordinates(res: Response) {
    console.log("res="+res.json()["results"]);
    this.lat = res.json()["results"][0]["geometry"]["bounds"]["northeast"]["lat"]
    this.lng = res.json()["results"][0]["geometry"]["bounds"]["northeast"]["lng"]
  }
}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
