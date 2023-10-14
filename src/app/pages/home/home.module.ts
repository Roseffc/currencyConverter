import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@NgModule({
  imports: [CommonModule],

  declarations: [HomeComponent,
    CardComponent]
})

export class HomeModule { }
