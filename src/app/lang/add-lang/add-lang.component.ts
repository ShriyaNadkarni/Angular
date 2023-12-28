import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LserviceService } from '../../../service/lservice.service';
import { Router } from '@angular/router';
import { Course } from '../../../interface/course';
import { Reviews } from '../../../interface/reviews';

interface CourseWithLanguage extends Course, Reviews {}

@Component({
  selector: 'app-todo-item',
  // template: `<span class="todo noselect" 
  //      (click)="onToggle()">{{todo.owner.firstname}} - {{todo.description}}
  //      - completed: {{todo.completed}}</span>`
  templateUrl:  './add-lang.component.html',
  styleUrls: ['./add-lang.component.css']

})

export class AddLangComponent {

  // @Input()
  //   todo:Todo;

  //   @Output()
  //   toggle = new EventEmitter<Object>();

  //   onToggle() {
  //       this.toggle.emit(this.todo);
  //   }




  constructor(private fb: FormBuilder, private lservice: LserviceService, private router: Router) {}

  addLanguages = this.fb.group({
    title: [''],
    description: [''],
    rating: [],
    comment: ['']
  });

  create() {
    this.lservice.add((this.addLanguages.value as CourseWithLanguage)).subscribe(() => {
      this.router.navigate(['lang']);
    });
  }

}
