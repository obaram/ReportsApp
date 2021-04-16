import {Report} from './report';
import {FiltersState} from './filters-state';

export interface ReportsState {
  filters: FiltersState;
  items: Report[];
  tags: Set<string>;
  years: Set<number>;
  pending: boolean;
}
