import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { NewTask } from '../actions/task.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public text = '';
  public taskList$: Observable<string[]>;

  constructor(private store: Store<{ count: number }>) {
    this.taskList$ = store.pipe(
      select('task'),
      map(state => state.taskList)
    );
  }

  ngOnInit() {
  }

  create() {
    this.store.dispatch(new NewTask(this.text));
    this.text = '';
  }

}
