import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-purchasedone',
  templateUrl: './purchasedone.component.html',
  styleUrls: ['./purchasedone.component.scss'],
})
export class PurchasedoneComponent implements OnInit {
  selectedTire: string = '';
  chosenVehicleType: string = '';
  selectedVehicleExtras: string= '';
  totalCreditsSpent: number = 0;
  creditsRemaining: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chosenVehicleType = params['chosenVehicleType'];
      this.totalCreditsSpent = +params['totalCreditsSpent'];
      this.creditsRemaining = +params['creditsRemaining'];
      this.selectedVehicleExtras =params['selectedVehicleExtras'];
    });
  }
  copyToClipboard() {
    const textArea = document.createElement('textarea');
    textArea.value = `Purchased: ${this.chosenVehicleType +" "+this.selectedVehicleExtras}\nTotal amount: ${this.totalCreditsSpent} credits\nCredits left: ${this.creditsRemaining} credits`;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      //console.log('Text copied to clipboard');
  }
  
  
}
