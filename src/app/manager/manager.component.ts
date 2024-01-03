import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CardService } from 'src/service/card.service';
import { Manager } from 'src/interface/manager';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-manager',
  imports: [MaterialModule , CommonModule ,InfiniteScrollModule , NgxSpinnerModule ,MatProgressSpinnerModule],
  providers:[NgxSpinnerService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA ],
  standalone:true,
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  managers: Manager[] = [];
  loading = false;

  constructor(private cardService: CardService , private spinner:NgxSpinnerService) {}

  ngOnInit() {
    this.fetchMoreData();
  }



  onScroll() {
    console.log("scrolled");
    this.spinner.show();
  
    this.fetchMoreData();  

    setTimeout(() => {
      this.spinner.hide();
    }, 6000);
  }
  
  fetchMoreData() {
    this.loading = true;
  
    this.cardService.getDetails().subscribe(
      (data) => {        
        this.managers = [...this.managers, ...data];
        console.log(this.managers);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching more data:', error);
        this.loading = false;
      }
    );
  }
  
  }
