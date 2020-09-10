import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contactMethodList = [
    {id: 1, name: 'email'},
    {id: 2, name: 'phone'}
  ]
  log(x) {
    console.log(x);
  }
  submit(f) {
    console.log(f);
  }

}
