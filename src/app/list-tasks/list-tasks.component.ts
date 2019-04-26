import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  @Input() taskList: string[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskList = this.taskService.getTaskList();
  }

}
