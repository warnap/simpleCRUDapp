import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Offer } from './offer'
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { ApiService } from '../api.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class OfferService extends ApiService{
  private handleError: HandleError;

  constructor(private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    super();
      this.handleError = httpErrorHandler.createHandleError('OfferService');
    }

  getOfers(): Observable<Offer[]>{
    const endPoint = 'offers';
    const url = this.createUrl(endPoint);

    return this.http.get<Offer[]>(url)
      .pipe(
        catchError(this.handleError('getOffers',[]))
      );
  }

  getOffer(offer: Offer): Observable<Offer>{
    const endPoint = 'offers/' + offer.id;
    const url = this.createUrl(endPoint);

    return this.http.get<Offer>(url)
      .pipe(
        catchError(this.handleError('getOffers', offer))
      );
  }

  addOffer(offer: Offer): Observable<Offer> {
    const endPoint = 'offers/0/';
    const url = this.createUrl(endPoint);

    return this.http.post<Offer>(url, offer)
    .pipe(
      catchError(this.handleError('addOffer', offer))
    );
  }

  updateOffer(offer: Offer): Observable<Offer> {
    const endPoint = 'offers/' + offer.id + '/';
    const url = this.createUrl(endPoint);

    return this.http.put<Offer>(url, offer, httpOptions)

    .pipe(
      catchError(this.handleError('updateOffer', offer))
    );

  }

  deleteOffer(id: number): Observable<{}> {
    const endPoint = 'offers/'+ id +'/';
    const url = this.createUrl(endPoint);

    return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('deleteOffer', id))
    );
  }
}