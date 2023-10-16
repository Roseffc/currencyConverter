import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-variation',
  templateUrl: './currency-variation.component.html',
  styleUrls: ['./currency-variation.component.scss'],
})
export class CurrencyVariationComponent implements OnInit {
  @Input() percentageValue = '';
  @Input() timer = '';

  constructor() {}

  ngOnInit() {}
}
