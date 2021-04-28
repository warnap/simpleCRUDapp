import { Component, OnInit } from '@angular/core';
import { Offer } from './offer';
import { OfferService } from './offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  offers?: Offer[];
  selectedOffer?: Offer;

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void {
    this.offerService.getOfers()
    .subscribe(offers => this.offers = offers);
  }

  onClick(offer: Offer): void {
    console.log(offer.title + ' Clicked');
  }

}
