import {Component} from '@angular/core';
import {State, Store} from '@ngrx/store';
import {ReportsState} from './shared/interfaces/reports-state';
import {loadReports} from './reports/state/reports.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store<ReportsState>) {
    this.store.dispatch(loadReports());
  }
}
