import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Report} from '../shared/interfaces/report';
import {
  filterByTags,
  filterByText,
  filterByYear,
  getFilters,
  getOptions,
  getReports,
  getTags
} from './state/reports.selectors';
import {Store} from '@ngrx/store';
import {ReportsState} from '../shared/interfaces/reports-state';
import {loadReports, setFilters} from './state/reports.actions';
import {map} from 'rxjs/operators';
import {FiltersState} from '../shared/interfaces/filters-state';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  public tags$: Observable<Set<string>> = this.store.select(getTags);
  public options$: Observable<number[]> = this.store.select(getOptions);
  public reports$: Observable<Report[]> = combineLatest([this.store.select(getReports), this.store.select(getFilters)]).pipe(
    map(filterByYear),
    map(filterByText),
    map(filterByTags),
  );

  constructor(private store: Store<ReportsState>) {
  }

  public ngOnInit(): void {
    this.store.dispatch(loadReports());
  }

  public setFilters(filters: FiltersState): void {
    this.store.dispatch(setFilters({filters}));
  }
}
