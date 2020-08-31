import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  sw = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogIn(): void{
    console.log('USERNAME', this.username);
    console.log('PASSWORD', this.password);
  }

  onLogIn2(form): void{
    console.log('variable local form:', form.value);
    //this.router.navigate(['/home']);
  }

}
