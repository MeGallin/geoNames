import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CLIENT_ID } from '../../../app/__envProd';
import { ICountry } from '../../components/data-table/IdataTable';
import { IGeoObject } from '../../components/data-table/geo-object';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {
  constructor(private httpGet$: HttpClient) {}

  getContent(): Observable<ICountry[]> {
    const clientId = CLIENT_ID;
    const url = `http://www.geonames.org/countryInfoJSON?username=${clientId}`;
    const localData = '../assets/localData/geoData.json';
    return this.httpGet$
      .get(localData, { responseType: 'json' })
      .pipe(map((res: IGeoObject) => <ICountry[]>res.geonames))
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
