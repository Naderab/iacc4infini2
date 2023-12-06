import { Injectable } from '@angular/core';
import { Apartment } from '../core/models/appartement';
import { ResidenceService } from './residence.service';
import { Residence } from '../core/models/residence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApartmentService {
  listResidences: Residence[] = [];
  listApartments: Apartment[] = [];
  apiUrl: string = 'http://localhost:3000/appartement/';
  constructor(private rs: ResidenceService, private http: HttpClient) {
    this.listResidences = this.rs.listResidences;
  }

  getAllApartments() {
    return this.http.get(this.apiUrl);
  }

  addApartment(body: Apartment) {
    return this.http.post(this.apiUrl, body);
  }

  updateApartment(body: Apartment) {
    return this.http.put(this.apiUrl + body.id, body);
  }

  deleteApartment(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
