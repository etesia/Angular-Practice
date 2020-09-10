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
  BtnStr: string;

  constructor() {
    this.lockStatus = 'lock_open';
    this.isActive = true;
    this.showFirst = true;
    this.BtnStr = 'Lock';
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  isClicked() {
    console.log(this.isActive);
    console.log(this.BtnStr);
    this.isActive = !this.isActive;

    if (this.isActive) { this.lockStatus = 'lock_open'; }
    if (!this.isActive) { this.lockStatus = 'lock'; }
    if (this.isActive) { this.BtnStr = 'Lock'; }
    if (!this.isActive) { this.BtnStr = 'Unlock'; }

  }
}
