import { TaskActions, TaskTypes } from '../actions/task.actions';

export interface TaskState {
    taskList: string[];
    done: boolean;
}

export const initialState: TaskState = {
    taskList: [],
    done: false
};

export function taskReducer(state = initialState, action: TaskActions): TaskState {
    const newState = state;
    
    switch (action.type) {
        case TaskTypes.NewTask:
            newState.taskList.push(action.payload);
            return newState;
        case TaskTypes.DeleteTask:
            newState.taskList.splice(action.payload, 1);
            return newState;
        case TaskTypes.LoadTask:
            return {...state, taskList: action.payload.response.taskList };
        default:
            return state;
    }
}