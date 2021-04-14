import {Injectable} from '@angular/core';
import {ReportsService} from '../../shared/services/reports.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as ReportsActions from './reports.actions';
import {loadReportsError} from './reports.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class ReportsEffects {
  constructor(private actions: Actions,
              private reportsService: ReportsService) {
  }

  loadReports$ = createEffect(() => this.actions.pipe(
    ofType(ReportsActions.loadReports),
    switchMap(() => this.reportsService.getReports()),
    map((items) => ReportsActions.loadReportsSuccess({items})),
    catchError(() => of(loadReportsError))
  ));
}
