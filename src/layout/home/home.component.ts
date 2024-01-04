import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';
import { Chart } from 'chart.js/auto';
import { Employee } from 'src/interface/employee';

@Component({
  selector: 'app-home',

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  chart: any = null;
  userId: number | null = null;
  userName: string | null = null;
  @ViewChild('canvas') canvas: ElementRef | undefined;

  constructor(private route: ActivatedRoute, private authService: AuthenticationService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'] ? +params['id'] : null;
      this.userName = params['name'] || null;
      if (this.userId) {
        this.authService.getId(this.userId).subscribe((user: any) => {
          this.authService.userId = this.userId;
          this.authService.setUserDetails(user);
        });
      }
    });
  }

  ngAfterViewInit() {
    if (this.canvas) {
      const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;
  
      this.authService.getEmployeesByGender().subscribe((data: Employee[]) => {
        // console.log(data);
  
        const genderCounts = data.reduce((acc: Record<string, number>, employee: Employee) => {
          const gender = employee.gender.toLowerCase();
          acc[gender] = (acc[gender] || 0) + 1;
          return acc;
        }, {});
  
        const genders = Object.keys(genderCounts);
        const counts = Object.values(genderCounts);
        console.log(genders);
        console.log(counts);
  
        if (this.chart) {
          this.chart.data.labels = genders;            //x-axis
          this.chart.data.datasets[0].data = counts;    //y-axis 
          this.chart.update(); 
        } else {
          this.chart = new Chart(canvasElement, {
            type: 'bar',
            data: {
              labels: genders,
              datasets: [
                {
                  label: 'Employee Count',
                  data: counts,
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  type: 'linear',
                  beginAtZero: true,
                },
              },
            },
          });
        }
      });
    }
  }

}








// import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AuthenticationService } from 'src/service/authentication.service';
// import { Chart } from 'chart.js/auto';


// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit, AfterViewInit {
//   chart: any = null;  
//   userId: number | null = null;
//   userName: string | null = null;
//   @ViewChild('canvas') canvas: ElementRef | undefined;

//   constructor(private route: ActivatedRoute, private authService: AuthenticationService) {}

//   ngOnInit() {
//     this.route.queryParams.subscribe(params => {
//       this.userId = params['id'] ? +params['id'] : null;
//       this.userName = params['name'] || null;
//       if (this.userId) {
//         this.authService.getId(this.userId).subscribe((user: any) => {
//           this.authService.userId = this.userId;
//           this.authService.setUserDetails(user);
//         });
//       }
//     });
//   }

//   ngAfterViewInit() {

//     if (this.canvas) {
  
//       const canvasElement: HTMLCanvasElement = this.canvas.nativeElement;                                                           // Using nativeElement to get the actual DOM element
      
//       this.chart = new Chart(canvasElement, {
//         type: 'bar',
//         data: {
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [
//             {
//               label: '# of Votes',
//               data: [12, 19, 3, 5, 2, 3],
//               borderWidth: 1,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               type: 'linear',  
//               beginAtZero: true,
//             },
//           },
//         },
//       });
      
//     }
//   }
// }
