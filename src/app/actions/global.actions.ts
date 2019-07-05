import { Action } from '@ngrx/store';

export class ToggleLoading implements Action {
    readonly type = '[Global] Toggle Loading';

    constructor(public payload: boolean) {}
}

export class ShowAlert implements Action {
    readonly type = '[Global] Show Alert';

    constructor(public payload: string) {}
}

export class HideAlert implements Action {
    readonly type = '[Global] Hide Alert';

    constructor() {}
}

export type GlobalActions = ToggleLoading | ShowAlert | HideAlert;
