import { Action } from '@ngrx/store';

export enum TaskTypes{
    NewTask = '[Task] New Task',
    DeleteTask = '[Task] Delete Task'
}

export class NewTask implements Action {
    readonly type = TaskTypes.NewTask;

    constructor(public payload: string) {}
}

export class DeleteTask implements Action{
    readonly type = TaskTypes.DeleteTask;
    
    constructor(public payload: number) {}
}

export class DoneTask implements Action{
    readonly type = '[Task] Done Task';

    constructor(public payload: boolean) {}

}

export type TaskActions = NewTask | DeleteTask | DoneTask;
