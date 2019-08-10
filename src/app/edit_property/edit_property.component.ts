import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import {IProperty, IUser} from '../model';
import {Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'edit_property.component.html'
})
// export class DetailsComponent {}
export class EditPropertyComponent implements OnInit {
  selectedId: number;
  // user$: Observable<IUser> = null;
  property: IProperty = null;
  loading: boolean;
  owner: IUser = null;

  errorMessage: string;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.property = new class implements IProperty {
      description: string;
      imageUrl: string;
      location: string;
      owner: IUser;
      price: number;
      propertyId: number;
      starRating: number;
      size: string;
    };

    this.owner = new class implements IUser {
      description: string;
      email: string;
      firstName: string;
      lastName: string;
      location: string;
      phone: string;
      photoUrl: string;
      rating: number;
      userId: number;
    };
  }

  submit() {
    console.log(this.property);
    console.log(this.owner);
    alert('Successfull');
  }
}
