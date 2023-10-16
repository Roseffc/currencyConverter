import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, interval, switchMap } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';

import { CurrencyQuoteType } from '../types/currency-quote';

@Injectable({
  providedIn: 'root',
})
export class CurrencyQuoteService {
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {}

  getCurrencyQuote(currencyCodes: string[]) {
    this.loading$.next(true);
    return this.httpClient
      .get<CurrencyQuoteType>(
        `${environment.urlApi}/json/last/${currencyCodes.join()}`
      )
      .pipe(
        delay(1000),
        take(1)
      );
  }

  getUpdateCurrencyQuote(currencyCodes: string[]) {
    return interval(180000) // 3 minutos em milissegundos
      .pipe(
        tap(() => {
          this.loading$.next(true);
        }),
        delay(1000),
        switchMap(() =>
          this.httpClient.get<CurrencyQuoteType>(
            `${environment.urlApi}/json/last/${currencyCodes.join()}`
          )
        )
      );
  }
}
