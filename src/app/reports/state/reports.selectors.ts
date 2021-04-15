import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ReportsState} from '../../shared/interfaces/reports-state';

export const getReportsState = createFeatureSelector<ReportsState>('reports');

export const getReports =  createSelector(getReportsState, (state: ReportsState) => state.items);
