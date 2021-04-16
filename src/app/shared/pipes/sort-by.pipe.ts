import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sortBy'})
export class SortByPipe implements PipeTransform {

  transform(value: any[], order = 'asc'): any[] {
    if (!value || value.length <= 1) {
      return value;
    }
    if (order === 'asc') {
      return value.sort();
    } else {
      console.log(value);
      return value.sort().reverse();
    }
  }
}
