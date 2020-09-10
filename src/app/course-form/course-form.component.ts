import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor() { }

  courseies = [
    {id: 1, name: 'Art'},
    {id: 2, name: 'Food'},
    {id: 3, name: 'Computer'}
  ]

  ngOnInit(): void {
  }

  onChange (x) {
    console.log(x);
  }

  courseSubmit(ff) {
    console.log(ff);
  }

}
