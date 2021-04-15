import {Component, OnInit} from '@angular/core';
import {loadReports} from '../state/reports.actions';
import {ReportsState} from '../../shared/interfaces/reports-state';
import {Store} from '@ngrx/store';
import {getReports} from '../state/reports.selectors';
import {Observable} from 'rxjs';
import {Report} from '../../shared/interfaces/report';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  public reports$: Observable<Report[]> = this.store.select(getReports);

  constructor(private store: Store<ReportsState>) {
  }

  public ngOnInit(): void {
    this.store.dispatch(loadReports());
    this.reports$.subscribe((data) => console.log(data));
  }

}
