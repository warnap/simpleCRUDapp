import { Component, OnInit } from '@angular/core';

import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
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

  constructor(private offerService: OfferService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getOffers();
    this.getCategories();
  }

  getOffers(): void {
    this.offerService.getOfers()
    .subscribe(offers => this.offers = offers);
  }

  getOffer(offer: Offer): void {
    this.offerService.getOffer(offer)
    .subscribe(offer => this.selectedOffer = offer);
  }

  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  onClick(offer: Offer): void {
    this.getCategories();
    this.offerService.getOffer(offer)
    .subscribe(offer => this.selectedOffer = offer);
  }

  add() {
    this.getCategories();
    var new_offer = <Offer>{};
    this.selectedOffer = new_offer;
  }

  save(offer: Offer): void {
    var new_offer: Offer = offer;

    if(offer.id != null){
      this.offerService.updateOffer(offer)
      .subscribe(offer => new_offer = offer);
    } else {
      this.offerService.addOffer(offer)
      .subscribe(offer => new_offer = offer);
    }
    this.getOffers();
    this.selectedOffer = undefined;
  }

  delete(offer: Offer): void {
    this.offers = this.offers?.filter(o => o !== offer);
    const id = offer.id;
    this.offerService.deleteOffer(id).subscribe();
  }

  exit(): void {
    this.selectedOffer = undefined;
  }
}