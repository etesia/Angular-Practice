import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  isSelected: boolean;
  heartNums: number;

  constructor() {
    this.isSelected = false;
    this.heartNums  = 0;
   }

  ngOnInit(): void {
  }

  isClicked() {
    this.isSelected = !this.isSelected;
    this.heartNums = 1 - this.heartNums;
    console.log("CLicked satus: ", this.isSelected);
  }

}
