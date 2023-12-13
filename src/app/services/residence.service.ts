import { Injectable } from '@angular/core';
import { Residence } from '../core/models/residence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'Manzah 5',
      image: '../../assets/images/R4.jpg',
    },
  ];
  apiUrl = 'http://localhost:3000/residence/';
  constructor(private http: HttpClient) {}

  addToList(r: Residence) {
    this.listResidences.push(r);
  }

  getAllResidences() {
    return this.http.get(this.apiUrl);
  }

  addResidence(body: Residence) {
    return this.http.post(this.apiUrl, body);
  }

  updateResidence(body: Residence) {
    return this.http.put(this.apiUrl + body.id, body);
  }

  deleteResidence(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
