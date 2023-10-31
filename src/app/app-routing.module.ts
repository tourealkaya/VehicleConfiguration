import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TuneVehicleComponent } from './home/components/tune-vehicle/tune-vehicle.component';
import { PurchasedoneComponent } from './home/components/purchasedone/purchasedone.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'tunevehicle', component: TuneVehicleComponent },

  { path: 'purchasedone', component: PurchasedoneComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
