import {Component, Input} from '@angular/core';
import {File} from 'src/app/shared/interfaces/file';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';

class IconDefinition {
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  public arrowUp = faAngleUp;
  public arrowDown = faAngleDown;
  @Input() title: string;
  @Input() items: File[];
  active: boolean;
  public get icon(): IconDefinition{
    return this.active ? this.arrowUp: this.arrowDown;
  }
}
