import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public text: string = '';
  public taskList: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  create(){
    this.taskList.push(this.text);
    this.text = '';
  }

}
