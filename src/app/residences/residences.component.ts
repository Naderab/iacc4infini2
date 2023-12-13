import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Apartment } from '../core/models/appartement';
import { ResidenceService } from '../services/residence.service';
import { ApartmentService } from '../services/apartment.service';
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  hide: boolean = true;
  apartFavoris: Apartment[] = [];
  listResidences: Residence[] = [];
  listApartments: Apartment[] = [];
  constructor(private rs: ResidenceService,private as:ApartmentService) {
    //this.listResidences = this.rs.listResidences;
    this.rs.getAllResidences().subscribe({
      next: (data) => this.listResidences = data as Residence[],
      error:(err)=>console.log(err)
    })
    this.listApartments = this.as.listApartments;
  }

  listApartByResidence: Apartment[] = [];

  showApart(residence: Residence) {
    console.log(this.listApartments)
    this.listApartByResidence = [];
    this.hide = false;

    //push and pull test
    for (let i = 0; i < this.listApartments.length; i++) {
      if (this.listApartments[i].residence == residence) {
        this.listApartByResidence.push(this.listApartments[i]);
      }
    }
  }

  addToFavoris(apart: Apartment) {
    this.apartFavoris.push(apart);
  }
}
