import { Injectable } from '@angular/core';
import { Residence } from '../Models/Residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

    constructor( private http:HttpClient) { }

    getResidenceList(){
      return this.Http.get<Residence[]>("http://localhost:3000/residences");
    }

}
