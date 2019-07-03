import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FetchTasks, LoadTask, TaskTypes } from '../actions/task.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TaskService } from '../services/task.service';
import { of } from 'rxjs';
import { ITaskListResponse } from '../models/taskListResponse';

@Injectable()
export class TaskEffects {

  @Effect()
  requestedPurchases$ = this.actions$.pipe(
    ofType<FetchTasks>(TaskTypes.FetchTasks),
    switchMap(() => this.taskService.getTaskList().pipe(
      catchError(() => of([]))
    )),
    map((response: ITaskListResponse) => new LoadTask({ response }))
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
