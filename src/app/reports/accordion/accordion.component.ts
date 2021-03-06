import {Component, Input} from '@angular/core';
import {File} from 'src/app/shared/interfaces/file';
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons';

class IconDefinition {}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() public title: string;
  @Input() public items: File[];

  public arrowUp = faAngleUp;
  public arrowDown = faAngleDown;
  public active: boolean;

  public get icon(): IconDefinition {
    return this.active ? this.arrowUp : this.arrowDown;
  }
}
