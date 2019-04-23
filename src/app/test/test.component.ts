import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "Estagiario";

  constructor() { }

  ngOnInit() {
  }

  getName(){
    return "A culpa é do " + this.name;
  }

}
