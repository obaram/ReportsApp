import {createAction, props} from '@ngrx/store';
import {Report} from '../../shared/interfaces/report';
import {FiltersState} from '../../shared/interfaces/filters-state';

const actionContext = ['REPORTS'];

export const loadReports = createAction(`${actionContext} Load reports`);
export const loadReportsSuccess = createAction(`${actionContext} Load reports success`, props<{items: Report[]}>());
export const loadReportsError = createAction(`${actionContext} Load reports error`);

export const setFilters = createAction(`${actionContext} Set filters`, props<{filters: FiltersState}>());
export const setFiltersSuccess = createAction(`${actionContext} Set filters success`, props<{filters: FiltersState}>());
export const setFiltersError = createAction(`${actionContext} Set filters error`, props<{filters: FiltersState}>());

export const setDefaultFilters = createAction(`${actionContext} Set default filters`);
export const setDefaultFiltersSuccess = createAction(`${actionContext} Set default filters success`, props<{filters: FiltersState}>());
export const setDefaultFiltersError = createAction(`${actionContext} Set default filters error`, props<{filters: FiltersState}>());

