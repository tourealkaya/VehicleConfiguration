import { Component, OnInit } from '@angular/core';
import { TuneVehicleRepository } from '../../repository/tune-vehicle-repository';
import { VehicleType } from '../../data/vehicle-type';
import { VehicleTire } from '../../data/vehicle-tire';
import { VehicleExtra } from '../../data/vehicle-extra';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tune-vehicle',
  templateUrl: './tune-vehicle.component.html',
  styleUrls: ['./tune-vehicle.component.scss'],
})

export class TuneVehicleComponent implements OnInit {
  availableCredits: number = 215;
  totalCredits: number = 0;
  totalCreditsRed: boolean = false;
  disablePurchaseButton: boolean = false;
  isTotalExceedsAvailable: boolean = false;

  vehicletypes!: VehicleType[];
  selectedVehicleType: string = '';

  vehicletires!: VehicleTire[];
  selectedVehicleTire: string = '';

  vehicleextras!: (VehicleExtra & { selected: boolean })[];
  selectedVehicleExtras: string[] = []; 

  constructor(
    private tuneVehicleRepository: TuneVehicleRepository,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vehicletypes = this.tuneVehicleRepository.vehicletypes;
    this.vehicletires = this.tuneVehicleRepository.vehicletires;
    this.vehicleextras = this.tuneVehicleRepository.vehicleextras.map((extra) => ({
      ...extra,
      selected: false,
    }));
    this.updateTotalCredits();
  }

  updateSelectedExtras() {
    this.selectedVehicleExtras = this.vehicleextras
      .filter((item) => item.selected)
      .map((item) => item.name);
    this.updateTotalCredits();
  }

  calculateTotalCredits(): number {
    let total = 0;
    const typeCredits = this.vehicletypes.find(
      (type) => type.name === this.selectedVehicleType)?.credits || 0;
    const tireCredits =
      this.selectedVehicleType !== 'Hovercraft'
        ? this.vehicletires.find(
            (tire) => tire.name === this.selectedVehicleTire
          )?.credits || 0
        : 0;
    const extraCredits = this.vehicleextras
      .filter((extra) => extra.selected)
      .reduce((acc, extra) => acc + extra.credits, 0);
    total = typeCredits + tireCredits + extraCredits;

    this.isTotalExceedsAvailable = total > this.availableCredits;
   // this.updatePurchaseButtonState();

    return total;
  }

  updateTotalCredits() {
    this.totalCredits = this.calculateTotalCredits();
  }
/*
  updatePurchaseButtonState() {
    if (this.isTotalExceedsAvailable) {
      this.totalCreditsRed = true;
      this.disablePurchaseButton = true;
    } else {
      this.totalCreditsRed = false;
      this.disablePurchaseButton = false;
    }
  }
*/
  purchase() {
    if (this.selectedVehicleType && this.selectedVehicleTire) {
      this.totalCredits = this.calculateTotalCredits();
      const purchaseDetails = {
        chosenVehicleType: this.selectedVehicleType,
        totalCreditsSpent: this.totalCredits,
        creditsRemaining: this.availableCredits - this.totalCredits,
        selectedVehicleExtras: this.selectedVehicleExtras
      };
      this.router.navigate(['/purchasedone', purchaseDetails], {
        relativeTo: this.route,
      });
    }

  }

  selectVehicleType(vehicleType: string) {
    this.selectedVehicleType = vehicleType;
    this.calculateTotalCredits();
  }


  selectVehicleTire(vehicleTire: string) {
    this.selectedVehicleTire = vehicleTire;
    this.calculateTotalCredits();
  }
}
