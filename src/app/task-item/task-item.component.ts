import { Component, OnInit, Input } from '@angular/core';
import { DeleteTask } from '../actions/task.actions';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { TaskState } from '../reducers/task.reducer';
import { selectTaskState } from '../selectors/task.selectors';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: string;
  @Input() index: number;

  constructor(private router: Router, private store: Store<TaskState>) { }

  ngOnInit() {
  }

  Remover(index){
    this.store.dispatch(new DeleteTask(index));
  }

}
