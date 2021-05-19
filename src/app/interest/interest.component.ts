import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  principal:number=0;
    rate:number=0;
    time:number=0;
    si:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  simpleInterest(){
    this.si=(this.principal*this.rate*this.time)/100
  }

}
