import { Component, Input } from '@angular/core';
import { VehicleType } from '../../data/vehicle-type';
@Component({
  selector: 'app-vehicletype',
  templateUrl: './vehicletype.component.html',
  styleUrls: ['./vehicletype.component.scss'],
})
export class VehicletypeComponent{
  @Input() vehicletype!: VehicleType;

}
