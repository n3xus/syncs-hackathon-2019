import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap, map, filter, first} from 'rxjs/operators';
import { IProperty, IUser } from './model';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/operator/take';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private propertyUrl = 'api/properties/properties.json';
  private userUrl = 'api/user/users.json';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.userUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getUser(id: number | string) {
    return this.getUsers().pipe(
      // (+) before `id` turns the string into a number
      map((users: IUser[]) => users.find(hero => hero.userId === +id))
    );
  }

  findUser(phone: string) {
    return this.getUsers().pipe(
      // (+) before `id` turns the string into a number
      map((users: IUser[]) => users.find(hero => hero.phone === phone))
    );
  }

  getProperties(): Observable<IProperty[]> {
    return this.http.get<IProperty[]>(this.propertyUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProperty(id: number): Observable<IProperty> {
    return this.getProperties().pipe(
      // (+) before `id` turns the string into a number
      map((properties: IProperty[]) => properties.find(hero => hero.propertyId === +id))
    );

    // return this.getProperties().pipe(
    //   // (+) before `id` turns the string into a number
    //   map((users: IUser[]) => users.find(hero => hero.userId === +id))
    // );

      // .map(properties => properties.filter(prop => prop.propertyId === id))
      // .take(1)
      // .pipe(
      //   tap(data => console.log('All: ' + JSON.stringify(data))),
      //   catchError(this.handleError)
      // );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
