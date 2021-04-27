import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Offer } from './offer'

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  url = '';
  offers?: Offer[];

  constructor(private http: HttpClient) { }



}
