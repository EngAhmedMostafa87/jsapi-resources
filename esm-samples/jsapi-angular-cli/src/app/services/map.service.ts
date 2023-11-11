import { Injectable } from '@angular/core';
import Map from "@arcgis/core/Map";
@Injectable({
  providedIn: 'root'
})
export class MapService {
  private _view: any = null;

  constructor() { }
  setView(view:any){
    this._view = view;
  }
  getView(){
    return this._view
  }

  getCenter(){
    return {center:this._view.center,zoom:this._view.zoom}
  }

  ChangeMap(){
    this._view.map.basemap = "hybrid"
  }

  ReturnToCenter(lat:number,log:number,zoom:number){
    this._view.goTo({
      center:[lat,log],
      zoom:zoom
    },{
      animate:true,
      duration :5000,
      easing:"ease"

    })
  }
}
