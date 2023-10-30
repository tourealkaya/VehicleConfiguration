import { Component, Input } from '@angular/core';
import { VehicleExtra } from '../../data/vehicle-extra';

@Component({
  selector: 'app-vehicleextra',
  templateUrl: './vehicleextra.component.html',
  styleUrls: ['./vehicleextra.component.scss'],
})
export class VehicleextraComponent {
  @Input() vehicleextra!: VehicleExtra;

}
