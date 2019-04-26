import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public text: string = '';
  public taskList: string[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTaskList().subscribe(data => { this.taskList = data.taskList });
  }

  create(){
    this.taskList.push(this.text);
    this.text = '';
  }

}
