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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number = 32.085300;
  lng: number = 34.781768;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }


  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


//   // Geocode an address.
//   googleMapsClient.geocode({
//   address: '1600 Amphitheatre Parkway, Mountain View, CA'
// }, function(err, response) {
//   if (!err) {
//     console.log(response.json.results);
//   }
// });

  mapClicked($event: MouseEvent) {
    let object =   {
      lat: $event.screenY,
      lng: $event.screenX,
      label: 'N',
      draggable: true
    }
    this.markers.push(object);
  }

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
}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
