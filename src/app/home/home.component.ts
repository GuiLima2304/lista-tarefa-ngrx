import { Component, OnInit } from '@angular/core';
import { TaskState } from '../reducers/task.reducer';
import { NewTask, FetchTasks } from '../actions/task.actions';
import { Store, select } from '@ngrx/store';
import { selectTaskList } from '../selectors/task.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public text = '';
  public taskList$ = this.store.pipe(select(selectTaskList));

  constructor(private store: Store<TaskState>) {}

  ngOnInit() {
    this.store.dispatch(new FetchTasks());
  }

  create() {
    this.store.dispatch(new NewTask(this.text));
    this.text = '';
  }

}
