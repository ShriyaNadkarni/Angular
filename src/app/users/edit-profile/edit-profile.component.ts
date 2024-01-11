import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';
import { Employee } from '../../../interface/employee';
import { errors } from 'src/errors';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  Data: Employee | any;
  employeeId: number | any;
  EditForm: FormGroup | any;
  errors = errors;
  hide: boolean = true;
  url = './assets/default.jpg';

  constructor(private route: ActivatedRoute, private authService: AuthenticationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeeId = params['id'];
      this.authService.getEmployeeById(this.employeeId).subscribe(data => {
        this.Data = data;
        localStorage.setItem('userData', JSON.stringify(this.Data));
        this.initializeForm();
      });
    });
  }

  private initializeForm() {
    this.EditForm = this.fb.group({
      id: new FormControl(this.Data?.id),
      name: new FormControl(this.Data?.name, [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z ]*$/)]),
      gender: new FormControl(this.Data?.gender, Validators.required),
      email: new FormControl(this.Data?.email, [Validators.required, Validators.email]),
      education: new FormControl(this.Data?.education, Validators.required),
      phonenumber: new FormControl(this.Data?.phonenumber, Validators.required),
      password: new FormControl(this.Data?.password, [Validators.required, Validators.maxLength(10)]),
      Image: new FormControl(this.Data?.Image),
    });
  }
  
  updateUser() {
    this.authService.updateEmployee(this.EditForm.value).subscribe((data) => {
      this.Data = data;
      console.log(data);
      this.router.navigate(["employees"]);
    });
  }

  getControl(name: any) {
    return this.EditForm?.get(name);
  }
  onSelectFile(e: any) {
    if (e.target.files) {
      const reader = new FileReader();
      const file = e.target.files[0];
  
      reader.readAsDataURL(file);
  
      reader.onload = (event: any) => {
        const fileName = file.name;
        const imagePath = `./assets/${fileName}`;

        this.EditForm.patchValue({
          Image: imagePath,
        });      
        this.url = imagePath;
      };
    }
  }
  
  

  
}
