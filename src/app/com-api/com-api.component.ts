import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-com-api',
  templateUrl: './com-api.component.html',
  styleUrls: ['./com-api.component.css'],
  styles: [
    `
    .material-icons {color: red}
    .ok {color:blue; background: red}
    `
  ]

})
export class ComAPIComponent {
  arrowStatus: string;
  isActive: boolean;
  @Input() arrowDirection: string;
  @Output() change = new EventEmitter;
  EventObj = {isActives: this.isActive, arrowDirection: this.arrowDirection};


  isOnClicked() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.EventObj.isActives = this.isActive;
      this.EventObj.arrowDirection  = 'arrow_circle_up';
      this.change.emit(this.EventObj);
      return this.arrowDirection = 'arrow_circle_up';
    }

    if (!this.isActive) {
      this.EventObj.isActives = this.isActive;
      this.EventObj.arrowDirection  = 'arrow_circle_down';
      this.change.emit(this.EventObj);
      return this.arrowDirection = 'arrow_circle_down';
    }
  }

}

export interface EventArgs {
  isAvtice: boolean;
  arrowDirection: string;
}
