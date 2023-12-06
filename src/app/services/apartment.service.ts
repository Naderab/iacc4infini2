import { Injectable } from '@angular/core';
import { Apartment } from '../core/models/appartement';
import { ResidenceService } from './residence.service';
import { Residence } from '../core/models/residence';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  listResidences: Residence[] = [];
  listApartments: Apartment[] = [];
  constructor(private rs: ResidenceService) {
    this.listResidences = this.rs.listResidences;
    this.listApartments = [
      {
        id: 1,
        appartNum: 1,
        floorNum: 0,
        surface: 100,
        terrace: 'oui',
        surfaceTerrace: 20,
        category: 'S+1',
        description: 'Appartement S+1',
        residence: this.listResidences[0],
      },
      {
        id: 2,
        appartNum: 2,
        floorNum: 0,
        surface: 130,
        terrace: 'non',
        surfaceTerrace: 0,
        category: 'S+2',
        description: 'Appartement S+2',
        residence: this.listResidences[0],
      },
      {
        id: 3,
        appartNum: 3,
        floorNum: 0,
        surface: 150,
        terrace: 'oui',
        surfaceTerrace: 30,
        category: 'S+3',
        description: 'Appartement S+3',
        residence: this.listResidences[1],
      },
      {
        id: 4,
        appartNum: 4,
        floorNum: 0,
        surface: 150,
        terrace: 'oui',
        surfaceTerrace: 30,
        category: 'S+3',
        description: 'Appartement S+3',
        residence: this.listResidences[1],
      },
    ];
  }


}
