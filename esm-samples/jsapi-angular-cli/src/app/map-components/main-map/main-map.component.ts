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
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit, OnDestroy {
  public view: any = null;

  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;

  initializeMap(): Promise<any> {
    const container = this.mapViewEl.nativeElement;

    const map = new Map({
      basemap: "streets-vector"
    })
    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c',
      },
    });  

    const view = new MapView({
      container,
      map: webmap
    });

    const basemapGallery = new BasemapGallery({
      view: view,
      source: [Basemap.fromId("topo-vector"), Basemap.fromId("hybrid")] // autocasts to LocalBasemapsSource
   });

    const bookmarks = new Bookmarks({
      view,
      // allows bookmarks to be added, edited, or deleted
      editingEnabled: true,
    });

    const bkExpand1 = new Expand({
      view,
      content: bookmarks,
      expandIcon: "key",
      expanded: false,
    });
    const bkExpand2 = new Expand({
      view,
      content: basemapGallery,
      expandIcon: "basemap",
      expanded: false,
    });

    // Add the widget to the top-right corner of the view
    view.ui.add([bkExpand1,bkExpand2], 'top-right');
    
    // bonus - how many bookmarks in the webmap?
    webmap.when(() => {
      if (webmap.bookmarks && webmap.bookmarks.length) {
        console.log('Bookmarks: ', webmap.bookmarks.length);
      } else {
        console.log('No bookmarks in this webmap.');
      }
    });

    this.view = view;
    return this.view.when();
  }

  ngOnInit(): any {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(() => {
      // The map has been initialized
        console.log('The map is ready.');
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
