import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TuneVehicleComponent } from './components/tune-vehicle/tune-vehicle.component';

const routes: Routes = [
  {
    path: '',
    component: TuneVehicleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
