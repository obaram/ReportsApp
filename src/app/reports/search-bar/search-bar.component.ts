import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {FiltersState} from '../../shared/interfaces/filters-state';
import {Filter} from '../../shared/interfaces/filter';
import {FilterType} from '../../shared/enums/filter-type';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  @Input() public options: number[];
  @Input() public tags: string[];
  @Output() public filter: EventEmitter<FiltersState> = new EventEmitter<FiltersState>();

  public subscription = new Subscription();
  public filterChanged: Subject<Filter> = new Subject<Filter>();
  public filters: FiltersState = {
    tags: new Set(),
    text: null,
    year: null
  };

  public ngOnInit(): void {
    this.subscription.add(this.filterChanged.subscribe((filter) => {
      const filters = Object.assign({}, this.filters);
      switch (filter.type) {
        case FilterType.Year:
          filters.year = filter.value as number;
          break;
        case FilterType.Text:
          filters.text = filter.value as string;
          break;
        case FilterType.Tag:
          if (filters.tags.has(filter.value as string)) {
            filters.tags.delete(filter.value as string);
          } else {
            filters.tags = filters.tags.add(filter.value as string);
          }
          break;
      }
      this.filters = {...filters};
    }));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
