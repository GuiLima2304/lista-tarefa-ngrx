import { Action } from '@ngrx/store';
import { ITaskListResponse } from '../models/taskListResponse';

export enum TaskTypes{
    NewTask = '[Task] New Task',
    DeleteTask = '[Task] Delete Task',
    FetchTask = '[Task] Fetch Task',
    LoadTask = '[Task] Load Task'
}

export class NewTask implements Action {
    readonly type = TaskTypes.NewTask;

    constructor(public payload: string) {}
}

export class DeleteTask implements Action{
    readonly type = TaskTypes.DeleteTask;
    
    constructor(public payload: number) {}
}

export class FetchTask implements Action{
    readonly type = TaskTypes.FetchTask;


    constructor() {}
}

export class LoadTask implements Action{
    readonly type = TaskTypes.LoadTask;

    constructor(public payload: { response: ITaskListResponse }) {}
}

export type TaskActions = NewTask | DeleteTask | FetchTask | LoadTask ;
