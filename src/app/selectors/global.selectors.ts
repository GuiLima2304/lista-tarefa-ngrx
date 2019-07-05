import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from '../reducers/global.reducer';

export const selectGlobalState = createFeatureSelector<GlobalState>('global');

export const selectLoading = createSelector(
    selectGlobalState,
    state => state.loading
);

export const selectShowAlert = createSelector(
    selectGlobalState,
    state => state.showAlert
);

export const selectMessageAlert = createSelector(
    selectGlobalState,
    state => state.messageAlert
);
