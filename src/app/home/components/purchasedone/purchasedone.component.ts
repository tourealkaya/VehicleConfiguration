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
  totalCreditsSpent: number = 0;
  creditsRemaining: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chosenVehicleType = params['chosenVehicleType'];
      this.totalCreditsSpent = +params['totalCreditsSpent'];
      this.creditsRemaining = +params['creditsRemaining'];
    });
  }
  copyToClipboard() {
    // Créez un élément texte temporaire pour contenir le texte à copier
    const textArea = document.createElement('textarea');
    textArea.value = `Chosen Vehicle Type: ${this.chosenVehicleType}\nTotal Credits Spent: ${this.totalCreditsSpent} credits\nCredits Remaining: ${this.creditsRemaining} credits`;
  
    // Ajoutez l'élément texte temporaire au document
    document.body.appendChild(textArea);
  
    // Sélectionnez le texte dans l'élément texte temporaire
    textArea.select();
  
    // Copiez le texte dans le presse-papiers
    document.execCommand('copy');
  
    // Supprimez l'élément texte temporaire du document
    document.body.removeChild(textArea);
  
    // Vous pouvez gérer le succès de la copie, par exemple, afficher un message de réussite
    console.log('Text copied to clipboard');
  }
  
  
}
