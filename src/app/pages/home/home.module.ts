import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { StatusCurrencyComponent } from 'src/app/shared/components/status-currency/status-currency.component';

@NgModule({
  imports: [CommonModule],

  declarations: [HomeComponent,
    CardComponent,
    StatusCurrencyComponent
  ],
})

export class HomeModule { }
