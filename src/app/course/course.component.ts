import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
courseId :any;
constructor(private route: ActivatedRoute , private router:Router){
  this.route.paramMap.subscribe(
    params => {
    this.courseId =params.get('id');

    }
    );
}
getId(id:number){
this.router.navigate(['/course',id],{queryParams:{name:'shriya', age:22}})
}

// constructor(private route: ActivatedRoute, private router: Router) {
//   this.route.queryParams.subscribe(
//     params => {
//       this.courseId = params['id'];
//     }
//   );
// }

// getId(id: number) {
//   this.router.navigate(['/course'], { queryParams: { id: id } });
// }


}
