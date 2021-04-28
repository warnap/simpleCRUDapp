import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Offer } from './offer'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';

const baseUrl = 'http://127.0.0.1:8000/offers/'

const httpOptions = {
  headers: new Headers({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('OfferService');
     }

  getOfers(): Observable<Offer[]>{
    return this.http.get<Offer[]>(baseUrl)
      .pipe(
        catchError(this.handleError('getOffers',[]))
      );
  }

}
