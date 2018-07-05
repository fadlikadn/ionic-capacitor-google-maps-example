import { GoogleMapsComponent } from './../../components/google-maps/google-maps';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(GoogleMapsComponent) mapComponent: GoogleMapsComponent;

  constructor() {

  }

  testMarker() {
    let center = this.mapComponent.map.getCenter();
    this.mapComponent.addMarker(center.lat(), center.lng());
  }

}
