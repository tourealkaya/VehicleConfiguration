import { Injectable } from '@angular/core';
import { VehicleType } from '../data/vehicle-type';
import { TuneVehicleRepository } from './tune-vehicle-repository';
import { VehicleTire } from '../data/vehicle-tire';
import { VehicleExtra } from '../data/vehicle-extra';

@Injectable({
  providedIn: 'any'
})
export class TuneVehicleRepositoryDummyImplService extends TuneVehicleRepository {
 
  public get vehicletypes(): VehicleType[]{
    return[
      {name : "car", credits: 0},
      {name : "Motorbike", credits: 0},
      {name : "Hovercraft", credits: 50}
    ];
  }

  public get vehicletires(): VehicleTire[]{
    return[
      {name : "Hard tires", credits: 0},
      {name : "Soft tires", credits: 30},
    ];
  }
  public get vehicleextras(): VehicleExtra[] {
    return [
        { name: "Nitro (10 units)", credits: 100 },
        { name: "Spoiler", credits: 200 },
    ]
  }
}
