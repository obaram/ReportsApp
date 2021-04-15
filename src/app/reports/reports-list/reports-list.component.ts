import {Component, Input, OnInit} from '@angular/core';
import {ReportsState} from '../../shared/interfaces/reports-state';
import {Store} from '@ngrx/store';
import {Report} from '../../shared/interfaces/report';


@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent implements OnInit {

  @Input() public items: Report[];

  constructor(private store: Store<ReportsState>) {
  }

  public ngOnInit(): void {

  }

}
