import {Component, Input} from '@angular/core';
import {Report} from '../../shared/interfaces/report';

@Component({
  selector: 'app-report-row',
  templateUrl: './report-row.component.html',
  styleUrls: ['./report-row.component.scss']
})
export class ReportRowComponent {
  @Input() item: Report;
}
