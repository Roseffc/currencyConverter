import { CurrencyQuoteType } from 'src/app/types/currency-quote';
import { CurrencyQuoteService } from './../../services/currency-quote.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currencyCodes = ['CAD-BRL', 'ARS-BRL', 'GBP-BRL'];
  currencyQuote!: CurrencyQuoteType;
  loading: boolean=false;
  errorRequest:boolean= false;

  constructor(private currencyQuoteService: CurrencyQuoteService) {}

  ngOnInit() {
    this.currencyQuoteService.loading$.subscribe((value) => {
      console.log('loading', value)
      this.loading = value;
    });
    this.getCurrencyQuote();
    this.getUpdateCurrencyQuote();
  }

  getCurrencyQuote() {
    this.currencyQuoteService
      .getCurrencyQuote(this.currencyCodes)
      .subscribe({
        next: (result:any) => {
          this.currencyQuote = result;
          this.currencyQuoteService.loading$.next(false)
        },
        error: (error) => {
          console.log('Error Servidor: ', error);
          this.errorRequest = true;
        },
       })
  }

  getUpdateCurrencyQuote() {
    this.currencyQuoteService
    .getUpdateCurrencyQuote(this.currencyCodes)
    .subscribe({
      next: (result) => {
      this.currencyQuote = result;
      this.currencyQuoteService.loading$.next(false)
      },
      error: (error) => {
        console.log('Error Servidor: ', error);
        this.errorRequest = true;
      },
    });
  }

  getBidValue(item: any) {
    return item.bid;
  }

  getCurrencyName(item: any) {
    return item.name.split('/')[0];
  }

  getPorcentageValue(item: any) {
    return item.pctChange;
  }

  getTimer(item: any) {
    return item.timestamp;
  }
}
