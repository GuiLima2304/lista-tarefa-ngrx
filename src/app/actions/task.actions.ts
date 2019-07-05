import { Action } from '@ngrx/store';

export class NewTask implements Action {
    readonly type = '[Task] New Task';

    constructor(public payload: string) {}
}

export class DeleteTask implements Action{
    readonly type = '[Task] Delete Task';
    
    constructor(public payload: number) {}
}

export type TaskActions = NewTask | DeleteTask;
