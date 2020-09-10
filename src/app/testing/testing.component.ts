import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})

export class TestingComponent implements OnInit {
  isActive: boolean;
  showFirst: boolean;
  lockStatus: string;

  constructor() {
    this.lockStatus = 'lock_open';
    this.isActive = true;
    this.showFirst = true;
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  isClicked() {
    console.log(this.isActive);
    this.isActive = !this.isActive;

    if (this.isActive) { return this.lockStatus = 'lock_open'; }
    if (!this.isActive) { return this.lockStatus = 'lock'; }
  }
}
