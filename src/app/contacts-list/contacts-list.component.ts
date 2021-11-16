import { Component, OnInit } from '@angular/core';
import { PhoneBookService } from '../phone-book/phone-book.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts!: Contact[];
  contactDetailsName!: String ;

  constructor(private phoneBookService: PhoneBookService) {}
  ngOnInit(): void {
    this.contacts = this.phoneBookService.getContacts();
  }

  addContactVide() {
    this.phoneBookService.addContactVides();
  }


}
