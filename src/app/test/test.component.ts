import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() msg:String=""
  @Output() onCall = new EventEmitter<any>()
  constructor() {}

  ngOnInit(): void {
  }
  fnc(){
    this.onCall.emit(this.msg)
  }
}
