import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { PhoneBookService } from '../phone-book/phone-book.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
})
export class ContactAddComponent implements OnInit {
  contact!: Contact;
  @Input() name!: String;

  imageW: String = '../../assets/images/warning.png';
  imageC: String = '../../assets/images/default-icon.jpg';

  constructor(private phoneBookService: PhoneBookService) {}

  ngOnInit(): void {
    this.contact = this.phoneBookService.getContact(this.name);
  }
  addContact(name: String, phone: String,image: String) {}
}
