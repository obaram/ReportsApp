import {createAction, props} from '@ngrx/store';
import {Report} from '../../shared/interfaces/report';
import {FiltersState} from '../../shared/interfaces/filters-state';

const actionContext = ['REPORTS'];

export const loadReports = createAction(`${actionContext} Load reports`);
export const loadReportsSuccess = createAction(`${actionContext} Load reports success`, props<{items: Report[]}>());
export const loadReportsError = createAction(`${actionContext} Load reports error`);

export const setFilters = createAction(`${actionContext} Set filters`, props<{filters: FiltersState}>());

