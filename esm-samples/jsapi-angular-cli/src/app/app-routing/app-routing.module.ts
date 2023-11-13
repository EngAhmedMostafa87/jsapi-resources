import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { MainMapComponent } from '../map-components/main-map/main-map.component';

const routes:Routes = [
  {
    path: 'home',
    component: MainMapComponent
   },
  {
    path: 'login',
    component: LoginComponent
   }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
