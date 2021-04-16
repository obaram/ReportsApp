import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private active: boolean;

  @HostListener('click') onClick(): void {
    if (!this.active) {
      this.highlight('#e3fcff');
      this.elementRef.nativeElement.classList.add('active');
    } else {
      this.highlight(null);
      this.elementRef.nativeElement.classList.remove('active');
    }

    this.active = !this.active;
  }

  constructor(private elementRef: ElementRef) {
  }

  private highlight(color: string): void {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
