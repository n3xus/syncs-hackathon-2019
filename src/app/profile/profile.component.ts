import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../app.service';
import { IUser } from '../model';
import {Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
  selectedId: number;
  user$: Observable<IUser> = null;
  loading: boolean;
  errorMessage: string;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.appService.getUser(this.selectedId);
      })
    );


    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.appService.getUser(+params.get('id')).subscribe(
    //       data => { this.setForm(data); },
    //       error => this.errorMessage = <any>error,
    //       () => { this.loading = false; })
    // ));
    //
    // var id = +this.route.snapshot.paramMap.get('id');
    //
    //
    // this._appService.getUser(id).subscribe(
    //   data => { this.setForm(data); },
    //   error => this.errorMessage = <any>error,
    //   () => { this.loading = false; });

    // this.property = {
    //   propertyId: id,
    //   location: 'Leaf rake with 48-inch wooden handle.',
    //   description: 'Leaf rake with 48-inch wooden handle.',
    //   price: 19.95,
    //   starRating: 3.2,
    //   imageUrl: 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    // };
  }
}
