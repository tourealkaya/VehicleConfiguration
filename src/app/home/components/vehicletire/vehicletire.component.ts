import { Component, Input} from '@angular/core';
import { VehicleTire } from '../../data/vehicle-tire';
@Component({
  selector: 'app-vehicletire',
  templateUrl: './vehicletire.component.html',
  styleUrls: ['./vehicletire.component.scss'],
})
export class VehicletireComponent {
  @Input() vehicletire!: VehicleTire;


}
