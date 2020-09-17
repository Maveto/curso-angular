import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()

export class AnimalService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAnimal(): Observable<any>{
    return this.http.get(`${this.url}/pets.json`);
  }

  public addAnimal(animal: any): Observable<any>{
    return this.http.post(`${this.url}/pets.json`, animal);
  }

  public deleteAnimal(id: any): Observable<any>{
    return this.http.delete(`${this.url}/pets/${id}.json`);
  }

  public updateAnimal(animal: any, id: any): Observable<any>{
    return this.http.put(`${this.url}/pets/${id}.json`, animal);
  }
}
