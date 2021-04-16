import {Injectable} from '@angular/core';
import {ReportsService} from '../../shared/services/reports.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as ReportsActions from './reports.actions';
import {loadReportsError, setDefaultFilters, setDefaultFiltersSuccess} from './reports.actions';
import {catchError, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {from, of} from 'rxjs';
import {ReportsState} from '../../shared/interfaces/reports-state';
import {Store} from '@ngrx/store';
import {getFilters, getOptions} from './reports.selectors';

@Injectable()
export class ReportsEffects {
  constructor(private actions: Actions,
              private reportsService: ReportsService,
              private store: Store<ReportsState>) {
  }

  loadReports$ = createEffect(() => this.actions.pipe(
    ofType(ReportsActions.loadReports),
    switchMap(() => this.reportsService.getReports()),
    switchMap((items) => {
      const mappedItems = items.reduce((acc, report, index) => {
        acc[index] = {...report, date: new Date(report.date)};
        return [...acc];
      }, []);
      return [ReportsActions.loadReportsSuccess({items: mappedItems}), setDefaultFilters()];
    }),
    catchError(() => of(loadReportsError))
  ));

  setDefaultFilters$ = createEffect(() => this.actions.pipe(
    ofType(ReportsActions.setDefaultFilters),
    withLatestFrom(this.store.select(getOptions), this.store.select(getFilters)),
    map(([action, options, filters]) => setDefaultFiltersSuccess({filters:  {...filters, year: Math.max(...options)}}))
  ));
}
