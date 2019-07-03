import { Action } from '@ngrx/store';
import { ITaskListResponse } from '../models/taskListResponse';

export enum TaskTypes {
    NewTask = '[Task Component] New Task',
    LoadTask = '[Task Component] Load Tasks',
    FetchTasks = '[Task Component] Fetch Task'
}

export class NewTask implements Action {
    readonly type = TaskTypes.NewTask;

    constructor(public payload: string) { }
}

export class LoadTask implements Action {
    readonly type = TaskTypes.LoadTask;

    constructor(public payload: { response: ITaskListResponse }) { }
}

export class FetchTasks implements Action {
    readonly type = TaskTypes.FetchTasks;

    constructor() {}
}

export type TaskActions = NewTask | FetchTasks | LoadTask;
