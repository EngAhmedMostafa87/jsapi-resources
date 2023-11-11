import { Component } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private mapService : MapService) {}
  onChange(){
    this.mapService.ChangeMap()
  }

  getCenter(){
    let center = this.mapService.getCenter();
    console.log("center ",center)
  }
  returnToCenter(){
    this.mapService.ReturnToCenter(29.692629608169508,31.084686051137155,8);
  }
}
