import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class MascotServiceService {

  constructor(private http: HttpClient) { }

  public getMascotas(): Observable<any>{
    return this.http.get('https://veterinary-test.firebaseio.com/pets.json');
  }

  public addMascota(mascota: any): Observable<any>{
    return this.http.post('https://veterinary-test.firebaseio.com/pets.json', mascota);
  }

  public deleteMascota(id: any): Observable<any>{
    return this.http.delete(`https://veterinary-test.firebaseio.com/pets/${id}.json`);
  }

  public updateMascota(id: any, mascota: any): Observable<any>{
    return this.http.put(`https://veterinary-test.firebaseio.com/pets/${id}.json`, mascota);
  }
}
