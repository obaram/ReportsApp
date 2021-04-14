import {Report} from './report';
import {FiltersState} from './filters-state';

export interface ReportsState {
  filters: FiltersState;
  items: Report[];
  pending: boolean;
}
