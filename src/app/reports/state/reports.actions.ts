import {createAction, props} from '@ngrx/store';
import {Report} from '../../shared/interfaces/report';

const actionContext = ['REPORTS'];

export const loadReports = createAction(`${actionContext} Load reports`);
export const loadReportsSuccess = createAction(`${actionContext} Load reports success`, props<{items: Report[]}>());
export const loadReportsError = createAction(`${actionContext} Load reports error`);
