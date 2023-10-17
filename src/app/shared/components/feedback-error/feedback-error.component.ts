import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-feedback-error',
  templateUrl: './feedback-error.component.html',
  styleUrls: ['./feedback-error.component.scss']
})

export class FeedbackErrorComponent {
  @Output() onClick= new EventEmitter();

  updateRequest() {
    this.onClick.emit()
  }

}
