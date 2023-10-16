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

  constructor(private currencyQuoteService: CurrencyQuoteService) {}

  ngOnInit() {
    this.getCurrencyQuote();
  }

  getCurrencyQuote() {
    this.currencyQuoteService
      .getCurrencyQuote(this.currencyCodes)
      .subscribe((result) => {
        this.currencyQuote = result;
        console.log(result);
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
