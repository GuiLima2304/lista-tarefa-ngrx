import { TaskTypes, TaskActions } from '../actions/task.actions';

export interface TaskState {
    taskList: string[];
}

export const initialState: TaskState = {
    taskList: []
};

export function reducer(state = initialState, action: TaskActions): TaskState {
    switch (action.type) {
        case TaskTypes.NewTask:
            return { ...state, taskList: [...state.taskList, action.payload] };
        case TaskTypes.LoadTask:
            return { ...state, taskList: action.payload.response.taskList };
        default:
            return state;
    }
}
