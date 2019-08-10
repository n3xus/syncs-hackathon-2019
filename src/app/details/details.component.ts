import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import {IProperty} from '../model';
import {Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: 'details.component.html'
})
// export class DetailsComponent {}
export class DetailsComponent implements OnInit {
  selectedId: number;
  // user$: Observable<IUser> = null;
  property$: Observable<IProperty> = null;
  loading: boolean;
  errorMessage: string;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.property$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.appService.getProperty(this.selectedId);
      })
    );

    // this.property$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.selectedId = +params.get('id');
    //
    //     return this.appService.getProperty(this.selectedId);
    //   }));

    // const id = +this.route.snapshot.paramMap.get('id');
    //
    // this._appService.getProperty(id).subscribe(
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
