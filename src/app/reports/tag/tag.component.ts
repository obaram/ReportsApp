import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  public cross = faTimes;
  public active: boolean;

  @Input() value: string;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  tagClicked(value): void {
    this.active = !this.active;
    this.clicked.emit(value);
  }
}
