import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { StatusCurrencyComponent } from 'src/app/shared/components/status-currency/status-currency.component';
import { CurrencyQuoteService } from 'src/app/services/currency-quote.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyVariationComponent } from 'src/app/shared/components/currency-variation/currency-variation.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { FeedbackErrorComponent } from 'src/app/shared/components/feedback-error/feedback-error.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],

  declarations: [
    HomeComponent,
    CardComponent,
    StatusCurrencyComponent,
    CurrencyVariationComponent,
    LoadingComponent,
    FeedbackErrorComponent
  ],
  providers:[CurrencyQuoteService]
})

export class HomeModule { }
