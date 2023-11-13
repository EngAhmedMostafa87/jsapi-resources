import { Injectable } from '@angular/core';
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
@Injectable({
  providedIn: 'root'
})
export class MapService {
  private _view: any = null;

  constructor() { }
  setView(view: any) {
    this._view = view;
  }
  getView() {
    return this._view
  }

  getCenter() {
    return { center: this._view.center, zoom: this._view.zoom }
  }

  ChangeMap() {
    this._view.map.basemap = "hybrid"
  }

  ReturnToCenter(lat: number, log: number, zoom: number) {
    this._view.goTo({
      center: [lat, log],
      zoom: zoom
    }, {
      animate: true,
      duration: 5000,
      easing: "ease"

    })
  }

  GetGraphicalLayer() {

    let graphicsLayer = this._view.map.allLayers.find(function(layer:GraphicsLayer) {
      return layer.id === "123456";
     });
     if(graphicsLayer == null){
      console.log("New Layer Created")
      graphicsLayer = new GraphicsLayer({
        id:"123456"
      });
     }
    
    this._view.map.add(graphicsLayer);

    return graphicsLayer;    
  }

  AddPoint(longitude:number,latitude:number){
    const point = new Point({ //Create a point
      longitude: longitude,
      latitude: latitude
    });
    const simpleMarkerSymbol = {
      type: "simple-marker",
      color: [226, 119, 40],  // Orange
      outline: {
        color: [255, 255, 255], // White
        width: 1
      }
    };
    const pointGraphic = new Graphic({
      geometry : point,
      symbol: simpleMarkerSymbol
     });

     let graphicsLayer = this.GetGraphicalLayer();
     
    graphicsLayer.add(pointGraphic);
  }
}
