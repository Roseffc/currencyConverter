import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { StatusCurrencyComponent } from 'src/app/shared/components/status-currency/status-currency.component';
import { CurrencyQuoteService } from 'src/app/services/currency-quote.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyVariationComponent } from 'src/app/shared/components/currency-variation/currency-variation.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],

  declarations: [HomeComponent,
    CardComponent,
    StatusCurrencyComponent,
    CurrencyVariationComponent
  ],
  providers:[CurrencyQuoteService]
})

export class HomeModule { }
