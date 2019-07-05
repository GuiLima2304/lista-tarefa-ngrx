import { TaskActions } from '../actions/task.actions';

export interface TaskState {
    taskList: string[];
}

export const initialState: TaskState = {
    taskList: ['Tarefa numero 1']
};

export function taskReducer(state = initialState, action: TaskActions): TaskState {
    const newState: TaskState = initialState;
    switch (action.type) {
        case '[Task] New Task':
            newState.taskList.push(action.payload);
            return newState;
        case '[Task] Delete Task':
            newState.taskList.splice(action.payload, 1);
            return newState;
        default:
            return state;
    }
}

