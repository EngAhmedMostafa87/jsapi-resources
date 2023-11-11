import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainMapComponent } from './map-components/main-map/main-map.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
