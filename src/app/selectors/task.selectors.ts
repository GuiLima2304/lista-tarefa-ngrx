import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState } from '../reducers/task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('task');


export const selectTaskList = createSelector(
    selectTaskState,
    state => state.taskList
);

export const done = createSelector(
    selectTaskState,
    state => state.done
);
