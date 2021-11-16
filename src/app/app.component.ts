import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from './phone-book/phone-book.service';
import { Contact } from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Contacts';
  contacts!: Contact[];
  contactDetailsName?: String;

  constructor(private phoneBookService: PhoneBookService) {}
  ngOnInit(): void {
    this.contacts = this.phoneBookService.getContacts();
  }
  addContactVide() {
    this.phoneBookService.addContactVides();
  }

  addNewContact(newContact: { nameC: String; phoneC: String }) {
    this.phoneBookService.addNewContact(newContact.nameC, newContact.phoneC);
  }

  onShowDetails(contactName: String) {
    this.contactDetailsName = contactName;
    console.log('nom contact =' + this.contactDetailsName);
  }
}
