import {ReportsState} from '../../shared/interfaces/reports-state';
import {Action, createReducer, on} from '@ngrx/store';
import * as ReportsActions from './reports.actions';

export const initialState: ReportsState = {
  items: [],
  filters: {
    tags: [],
    year: null,
    searchValue: null,
  },
  pending: false
};

const reducer = createReducer(
  initialState,
  on(ReportsActions.loadReports, (state: ReportsState) => ({
    pending: true,
    ...state
  })),
  on(ReportsActions.loadReportsSuccess, (state: ReportsState, {items}) => ({
    ...state,
    items,
    pending: false,
  })),
  on(ReportsActions.loadReportsError, (state: ReportsState) => ({
    ...state,
    pending: false,
  }))
);

export function reportsReducer(state: ReportsState, action: Action): ReportsState {
  return reducer(state, action);
}

