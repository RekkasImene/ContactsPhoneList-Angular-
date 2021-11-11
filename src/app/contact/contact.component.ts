import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() name!: String;
  @Input() phone!: String;
  @Input() image!: String;
  imageW: String = '../../assets/images/warning.png';

  @Output() contactEvent = new EventEmitter <String>();

  showDetails (name:string) {
    this.contactEvent.emit (name);
    }

}
