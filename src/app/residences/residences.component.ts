import { Component } from '@angular/core';
import { Residence } from '../Core/Models/Residence';
import { FormControl } from '@angular/forms';
import { ResidenceService } from '../Core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {

  constructor(private rs:ResidenceService){} 
   listResidences[];
  

  favoriteResidences: Residence[] = [];
  searchTerm: string = '';
searchControl!: FormControl<any>;

  showLocation(residence: Residence) {
    if (residence.address === "inconnu") {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      alert(`Adresse: ${residence.address}`);
    }
  }

  addToFavorites(residence: Residence) {
    if (!this.favoriteResidences.some(fav => fav.id === residence.id)) {
      this.favoriteResidences.push(residence);
    }
  }

  filterResidences(): Residence[] {
    return this.rs.getResidenceList().subscribe(result=>this.ListrResidence=result)(residence =>
      residence.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      residence.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
