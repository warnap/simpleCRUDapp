import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category';
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
  editOffer?: Offer;
  categories?: Category[];

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.getOffers();
  }

  getOffers(): void {
    this.offerService.getOfers()
    .subscribe(offers => this.offers = offers);
  }

  getOffer(offer: Offer): void {
    this.offerService.getOffer(offer)
    .subscribe(offer => this.selectedOffer = offer);
  }

  onClick(offer: Offer): void {
    this.selectedOffer = offer;
  }

  add() {
    console.log('Add clicked!')
    // this.editOffer = undefined;

    // this.offerService
    //   .addOffer(this.editOffer)
    //   .subscribe(offer => this.offers?.push(offer));
  }

  edit(offer:Offer): void {

  }

  delete(offer: Offer): void {
    this.offers = this.offers?.filter(o => o !== offer);
    const id = offer.id;
    this.offerService.deleteOffer(id).subscribe();
  }
}
