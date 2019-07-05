import { GlobalActions } from '../actions/global.actions';

export interface GlobalState {
    loading: boolean;
    showAlert: boolean;
    messageAlert: string;
}

export const initialState: GlobalState = {
    loading: true,
    showAlert: false,
    messageAlert: ''
};

export function globalReducer(state = initialState, action: GlobalActions): GlobalState {
    switch (action.type) {
        case '[Global] Toggle Loading':
            return { ...initialState, loading: action.payload };
        case '[Global] Show Alert':
            return { ...initialState, showAlert: true, messageAlert: action.payload };
        case '[Global] Hide Alert':
            return { ...initialState, showAlert: false, messageAlert: '' };
        default:
            return state;
    }
}
