import { Action } from '@ngrx/store';

export enum TaskTypes {
    NewTask = '[Task Component] New Task'
}

export class NewTask implements Action {
    readonly type = TaskTypes.NewTask;

    constructor(public payload: string) { }
}

export type TaskActions = NewTask;
