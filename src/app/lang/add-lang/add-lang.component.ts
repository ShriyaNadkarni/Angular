import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LserviceService } from '../lservice.service';
import { Router } from '@angular/router';
import { Course } from '../course';
import { Reviews } from '../reviews';

interface CourseWithLanguage extends Course, Reviews {}

@Component({
  selector: 'app-add-lang',
  templateUrl: './add-lang.component.html',
  styleUrls: ['./add-lang.component.css']
})
export class AddLangComponent {
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
