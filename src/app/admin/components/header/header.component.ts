import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() report: boolean;

  vaccinated = 0;
  notVaccinated = 0;
  storeSub: Subscription;

  constructor(private authService: AuthService, private store: Store<any>) { }

  ngOnInit(): void {
    this.storeSub = this.store.select(s => s.admin).subscribe(res => {
      this.vaccinated = 0;
      this.notVaccinated = 0;
      this.vaccinated = res.vaccinated;
      this.notVaccinated = res.notVaccinated;
    });
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    // tslint:disable-next-line:no-unused-expression
    this.storeSub ? this.storeSub.unsubscribe() : '';
  }
}
