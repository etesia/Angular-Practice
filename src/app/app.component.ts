import { Component } from '@angular/core';
import { EventArgs } from './com-api/com-api.component';

import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;
  post = {
    isUporDown: true,
    arrowD: 'arrow_circle_down' // 改up or down (配合app html)
  }
  // tslint:disable-next-line: typedef
  change(eventArg: EventArgs) {
    console.log ('Change status!', eventArg);
  }
}
