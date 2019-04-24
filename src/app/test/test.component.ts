import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  //@Input('parentData') public name;

  @Output() public childEvent = new EventEmitter();

  name = "Estagiario";
  myId = "estagId";

  number = -1;
  className = "positive";

  colors = ['red', 'green', 'yellow']

  constructor() { }

  ngOnInit() {
  }

  getName(){
    return "A culpa é do " + this.name;
  }

  inverter(){
    this.number = this.number * -1;
  }

  fireEvent(){
    this.childEvent.emit('Sou o estaguinho, seu amiguinho');
  }

}
