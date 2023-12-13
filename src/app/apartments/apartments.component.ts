import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApartmentService } from '../services/apartment.service';
import { Apartment } from '../core/models/appartement';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent {
  id!: number;
  listApartments: Apartment[] = [];

  constructor(private ar: ActivatedRoute, private as: ApartmentService) {
    console.log(this.ar.snapshot);
    this.id = this.ar.snapshot.params['id'];
    console.log(this.listApartments);
    this.filterList();
    this.as.getAllApartments().subscribe({
      next: (data) => this.listApartments = data as Apartment[],
      error : (err)=>console.log(err)
    })
  }

  filterList() {
    for (let i = 0; i < this.as.listApartments.length; i++) {
      if (this.as.listApartments[i].residence.id == this.id) {
        this.listApartments.push(this.as.listApartments[i]);
      }
    }
  }
}
