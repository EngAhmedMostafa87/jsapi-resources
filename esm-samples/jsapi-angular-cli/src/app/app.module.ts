import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainMapComponent } from './map-components/main-map/main-map.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { MenuComponent } from './nav-bar/menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    NavBarComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
