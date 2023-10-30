import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { TuneVehicleRepository } from './repository/tune-vehicle-repository';
import { TuneVehicleRepositoryDummyImplService } from './repository/tune-vehicle-repository-dummy-impl.service';
import { TuneVehicleComponent } from './components/tune-vehicle/tune-vehicle.component';
import { HomePageRoutingModule } from './home-routing.module';
import { VehicletypeComponent } from './components/vehicletype/vehicletype.component';
import { VehicletireComponent } from './components/vehicletire/vehicletire.component';
import { VehicleExtra } from './data/vehicle-extra';
import { VehicleextraComponent } from './components/vehicleextra/vehicleextra.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    TuneVehicleComponent,
    VehicletypeComponent,
    VehicletireComponent,
    VehicleextraComponent
  ],
  providers:[{
    provide: TuneVehicleRepository,
    useClass: TuneVehicleRepositoryDummyImplService,
  }],
})
export class HomePageModule {}
