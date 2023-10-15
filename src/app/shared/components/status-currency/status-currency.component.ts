import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-status-currency',
  templateUrl: './status-currency.component.html',
  styleUrls: ['./status-currency.component.scss'],
})
export class StatusCurrencyComponent implements OnInit {
  private currencyValue: number = 0;

  @Input()
  set coin(value: any) {
    if (typeof value === 'string') {
      this.currencyValue = parseFloat(value);
    } else {
      this.currencyValue = value;
    }
  }

  get manipulatedValue(): number {
    return this.currencyValue;
  }

  constructor() {}

  ngOnInit() {}
}
