import { TaskActions } from '../actions/task.actions';

export interface TaskState {
    taskList: string[];
}

export const initialState: TaskState = {
    taskList: ['Tarefa numero 1']
};

export function taskReducer(state = initialState, action: TaskActions): TaskState {
    switch (action.type) {
        case '[Task] New Task':
            const newState: TaskState = initialState;
            newState.taskList.push(action.payload);
            return newState;
        default:
            return state;
    }
}
