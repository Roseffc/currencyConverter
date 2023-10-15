import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-currency',
  templateUrl: './status-currency.component.html',
  styleUrls: ['./status-currency.component.scss']
})
export class StatusCurrencyComponent implements OnInit {
  @Input() coin=0;

  constructor() { }

  ngOnInit() {
  }

}
