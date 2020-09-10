import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})

export class ZippyComponent {
  @Input() title: string; // passing the title from app.comp.html 其實就是 zippy 這個component的屬性
  isExpanded:boolean = true;
  isChanged: boolean = false;

  onClick() {
    this.isExpanded = !this.isExpanded;
    this.isChanged = !this.isChanged;
    console.log(this.isChanged);
  }

}
