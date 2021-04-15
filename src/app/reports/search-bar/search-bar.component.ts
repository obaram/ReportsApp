import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {FiltersState} from '../../shared/interfaces/filters-state';
import {Filter} from '../../shared/interfaces/filter';
import {FilterType} from '../../shared/enums/filter-type';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() options: number[];
  @Input() tags: string[];
  @Output() filter: EventEmitter<FiltersState> = new EventEmitter<FiltersState>();
  public filterChanged: Subject<Filter> = new Subject<Filter>();

  public filters: FiltersState = {
    year: null,
    tags: new Set(),
    searchValue: null
  };

  public ngOnInit(): void {
    this.filterChanged.subscribe((filter) => {
      const clone = Object.assign({}, this.filters);
      switch (filter.type) {
        case FilterType.Year:
          clone.year = filter.value as number;
          break;
        case FilterType.Text:
          clone.searchValue = filter.value as string;
          break;
        case FilterType.Tag:
          if (clone.tags.has(filter.value as string)) {
            clone.tags.delete(filter.value as string);
          } else {
            clone.tags = clone.tags.add(filter.value as string);
          }
          break;
        default:
          break;
      }
      this.filters = {...clone};
    });
  }

  public selectionChanged(value: number): void {
    this.filterChanged.next({type: FilterType.Year, value});
  }

  public textFilterChanged(value: string): void {
    this.filterChanged.next({type: FilterType.Text, value});
  }

  public tagChanged(value: string): void {
    this.filterChanged.next({type: FilterType.Tag, value});
  }
}
