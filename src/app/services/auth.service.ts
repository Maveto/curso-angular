import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService{

  constructor(private http: HttpClient) {
  }

  public login(body: any): Observable<any>{
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3by8MObe4NzgZIZMjEwJ5FeZnu4SgNyk',
      body);
  }
}
