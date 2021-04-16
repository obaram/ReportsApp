import {ReportsState} from '../../shared/interfaces/reports-state';
import {Action, createReducer, on} from '@ngrx/store';
import * as ReportsActions from './reports.actions';
import {Report} from '../../shared/interfaces/report';

export const initialState: ReportsState = {
  items: [],
  filters: {
    tags: new Set<string>(),
    year: null,
    text: null,
  },
  tags: new Set<string>(),
  years: new Set<number>(),
  pending: false
};

const reducer = createReducer(
  initialState,
  on(ReportsActions.loadReports, (state: ReportsState) => ({
    pending: true,
    ...state
  })),
  on(ReportsActions.loadReportsSuccess, (state: ReportsState, {items}) => {
    return {
      ...state,
      items,
      filters: {
        ...state.filters
      },
      tags: items.reduce((acc: Set<any>, item: Report) => {
        return acc.add(item.category);
      }, new Set()),
      years: items.reduce((acc: Set<any>, item: Report) => {
        return acc.add(new Date(item.date).getFullYear());
      }, new Set()),
      pending: false
    };
  }),
  on(ReportsActions.loadReportsError, (state: ReportsState) => ({
    ...state,
    pending: false,
  })),
  on(ReportsActions.setFilters, ReportsActions.setDefaultFiltersSuccess, (state: ReportsState, {filters}) => ({
    ...state,
    filters
  })),
);

export function reportsReducer(state: ReportsState, action: Action): ReportsState {
  return reducer(state, action);
}

