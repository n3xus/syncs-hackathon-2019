import { Component, OnInit } from '@angular/core';
import {IProperty, IUser} from '../model';
import { AppService } from '../app.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  templateUrl: 'listings.component.html'
})
export class ListingsComponent implements OnInit {
  properties$: Observable<IProperty[]> = null;

  lat = 51.678418;
  lng = 7.809007;

  errorMessage: string;
  filterCheckIn: string;
  filterCheckOut: string;
  filterLocation: string;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {

    this.properties$ = this.appService.getProperties();
  }

  filter() {

  }
}
