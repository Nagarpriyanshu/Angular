import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  data:String=""
    principal:number=0;
    rate:number=0;
    time:number=0;
    si:number=0;
  
  constructor(){
    console.log(`new data - ${this.data}`)
  }
  ngOnChanges(){
     console.log(`ngOnChanges - data is${this.data}`)
  }
  ngOnInit(){
    console.log(`ngOnInit - data is${this.data}`)
  }
  public fnc():void{
    this.data='Welcome to HCl'
  }
  display(msg:string):void{
    this.data=msg
  }

  simpleInterest(){
    this.si=(this.principal*this.rate*this.time)/(100*12);
  }

}
