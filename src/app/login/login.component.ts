import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogIn(form: any): void{
    this.authService.login({...form.value, returnSecureToken: true}).subscribe(
      res => {
        console.log('LOGIN RESPONSE', res);
        this.router.navigate(['pages']);
      },
      error => {
        console.log('LOGIN ERROR:', error.error.error.message);
      }
    );
  }

}
