import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() filter: EventEmitter<void> = new EventEmitter<void>();
  @Output() textChanged: EventEmitter<string> = new EventEmitter<string>();
}
