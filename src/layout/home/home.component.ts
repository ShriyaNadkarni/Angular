import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { Observable, Subscription, interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  userId: number | null = null;
  userName: string | null = null;

  constructor(private route: ActivatedRoute, private authService:AuthenticationService) { }

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

  }


















  // this.route.queryParams.subscribe(params => {
  //   const userId = params['id'];
  //   if (userId) {
  //     this.authService.getId(userId).subscribe((user: any) => {
  //       // Handle the retrieved user details as needed
  //       console.log('User details:', user);

  //       // You can pass the user details to other components or services here
  //     });
  //   }
  // });



  // this.msg = this.messageservice.getmessage();
    // this.intervalSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // // Corrected customObservable placement
    // let customObservable = new Observable<number>(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // });

    // customObservable.subscribe(data => {
    //   console.log(data);
    // });


    
  // intervalSubscription: Subscription = new Subscription;

  // constructor(private messageservice: MessageService) {
  // }

  // ngOnDestroy(): void {
  //   this.intervalSubscription.unsubscribe();
  // }