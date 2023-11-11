import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';

import WebMap from '@arcgis/core/WebMap';
import Map from "@arcgis/core/Map";
import MapView from '@arcgis/core/views/MapView';
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import Basemap from "@arcgis/core/Basemap";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent  {
  public view: any = null;

  // The <div> where we will place the map


  onChange(){
    this.view.map = new Map({
      basemap:"hybrid"
    })
    this.view.center.latitude = 30.209615825125955
    this.view.center.longitude = 31.703621149063412
    this.view.zoom = 9
    console.log('clicked')
  }

  getCenter(){
    console.log(this.view.center)
    console.log(this.view.zoom)

  }
}
