import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
})
export class ContactAddComponent {
  imageW: String = '/assets/images/warning.png';
  imageC: String = '/assets/images/default-icon.jpg';

  @Output() newContact = new EventEmitter<{ nameC: String; phoneC: String }>();

  /*addContact(nameCont: string, phoneCont: string) {
    this.phoneBookService.addContact(nameCont, phoneCont);
  }*/

  addNewContact(valueName: String, valuePhone: String) {
    this.newContact.emit({ nameC: valueName, phoneC: valuePhone });
  }
}
