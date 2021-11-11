import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';
import { PhoneBookService } from '../phone-book/phone-book.service';
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
})
export class ContactAddComponent {
  imageW: String = '/assets/images/warning.png';
  imageC: String = '/assets/images/default-icon.jpg';

  @Output() newContact = new EventEmitter<{nameC:string, phoneC:string}>();

  constructor(private phoneBookService: PhoneBookService) {}

  /* ngOnInit(): void {
    this.contact = this.phoneBookService.getContact(this.name);
  }*/
  /*addContact(nameCont: string, phoneCont: string) {
    this.phoneBookService.addContact(nameCont, phoneCont);
  }*/

  addNewContact(valueName: string, valuePhone: string) {
    this.newContact.emit({nameC :valueName, phoneC: valuePhone});
  }
}
