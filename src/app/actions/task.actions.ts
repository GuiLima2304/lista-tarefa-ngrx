import { Action } from '@ngrx/store';

export class NewTask implements Action {
    readonly type = '[Task] New Task';

    constructor(public payload: string) {}
}

export type TaskActions = NewTask;
