import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
