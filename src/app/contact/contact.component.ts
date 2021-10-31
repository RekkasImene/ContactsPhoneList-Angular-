import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { PhoneBookService } from '../phone-book/phone-book.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contact!: Contact;
  @Input() name!: String;
  imageW: String = '../../assets/images/warning.png';

  /*contact: Contact = {
    nameC: 'Coccinelle',
    phoneC: '01 12 34 56 78',
    imageC: '../../assets/images/gotlib-coccinelle.jpg',
  };*/

  constructor(private phoneBookService: PhoneBookService) {}

  ngOnInit(): void {
    this.contact = this.phoneBookService.getContact(this.name);
  }
}
