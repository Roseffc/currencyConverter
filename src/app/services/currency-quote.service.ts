import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { take } from 'rxjs';
import { CurrencyQuoteType } from '../types/currency-quote';

@Injectable({
  providedIn: 'root'
})
export class CurrencyQuoteService {

constructor(private httpClient:HttpClient) { }

getCurrencyQuote(currencyCodes:string[]) {
  return this.httpClient.get<CurrencyQuoteType>(`${environment.urlApi}/json/last/${currencyCodes.join()}`)
  .pipe(take(1));
}

}
