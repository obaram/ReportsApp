import {HighlightDirective} from './highlight.directive';
import {ElementRef} from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const element = document.createElement('div');
    const directive = new HighlightDirective(new ElementRef(element));
    expect(directive).toBeTruthy();
  });
});
