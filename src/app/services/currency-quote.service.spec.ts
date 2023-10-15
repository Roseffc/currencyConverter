/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyQuoteService } from './currency-quote.service';

describe('Service: CurrencyQuote', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyQuoteService]
    });
  });

  it('should ...', inject([CurrencyQuoteService], (service: CurrencyQuoteService) => {
    expect(service).toBeTruthy();
  }));
});
