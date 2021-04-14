import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../shared/interfaces/app-state';
import * as fromReports from '../reports/state/reports.reducer';

export const reducers: ActionReducerMap<AppState> = {
  reports: fromReports.reportsReducer
};
