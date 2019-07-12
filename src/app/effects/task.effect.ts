import { Injectable } from '@angular/core';
import {  Actions, Effect, ofType } from '@ngrx/effects';
import {  switchMap, catchError, map } from 'rxjs/operators';
import { FetchTask, TaskTypes, LoadTask } from '../actions/task.actions';
import { TaskService } from '../services/task.service';
import { of } from 'rxjs';
import { ITaskListResponse } from '../models/taskListResponse';

@Injectable()
export class TaskEffects{

    @Effect()
            requestedPurchases$ = this.actions$.pipe(
                ofType<FetchTask>(TaskTypes.FetchTask),
                switchMap(() => this.taskService.getTaskList().pipe(
                    /*map(response => {
                        return { ...response, taskList: [response.taskList[0]] }
                    }),*/
                    //como nao eh uma lista, esta pegando diretamenta da posicao
                    catchError(() => of([]))
                )),
                map((response: ITaskListResponse) => new LoadTask({response}))
        );


    constructor(private actions$: Actions, public taskService: TaskService) {}
}