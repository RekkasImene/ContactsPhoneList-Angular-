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

  constructor(private phoneBookService: PhoneBookService) {}
  ngOnInit(): void {
    this.contacts = this.phoneBookService.getContacts();
  }
}
