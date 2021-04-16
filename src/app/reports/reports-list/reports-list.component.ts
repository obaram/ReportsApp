import {Component, Input} from '@angular/core';
import {Report} from '../../shared/interfaces/report';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent {
  @Input() public items: Report[];
}
