import {FilterType} from '../enums/filter-type';

export interface Filter {
  type: FilterType;
  value: string | number;
}
