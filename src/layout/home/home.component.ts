import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { Observable, Subscription, interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  msg: string = "";
  userName: string | null = null;

  // intervalSubscription: Subscription = new Subscription;

  // constructor(private messageservice: MessageService) {
  // }

  // ngOnDestroy(): void {
  //   this.intervalSubscription.unsubscribe();
  // }
  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
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
    this.route.queryParams.subscribe(params => {
      this.userName = params['name'] || null;
    });
  }
  }

