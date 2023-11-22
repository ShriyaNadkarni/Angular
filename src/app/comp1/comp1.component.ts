import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
  //providers:[NumlistService]
})
export class Comp1Component {
list:number[]=[];

constructor(private numlistService:NumlistService){

}
ngOnInit():void{
this.list=this.numlistService.getnumber();
}

addnumber(val:any){
this.numlistService.addnumber(val);
this.list=this.numlistService.getnumber();
}
}
