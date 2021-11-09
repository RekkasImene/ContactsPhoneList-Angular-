import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
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
  contacts= [] as Contact[];

  imageW: String = './../assets/images/warning.png';
  imageC: String = './../assets/images/default-icon.jpg';

  /*@ViewChild('nameCont') nameCont: ElementRef;
  @ViewChild('phoneCont') phoneCont: ElementRef;
  this.nameCont.nativeElement.value;
    this.contact.phoneC = this.phoneCont.nativeElement.value;*/

  constructor(private phoneBookService: PhoneBookService) {}

  ngOnInit(): void {
    this.contact = this.phoneBookService.getContact(this.name);
  }
  addContact(nameCont: String,phoneCont:String) {
    this.contacts= this.phoneBookService.getContacts();
    this.contact.nameC = nameCont;
    this.contact.phoneC = phoneCont;
    this.contact.imageC = this.imageC;
    this.contacts.push(this.contact);
  }
}
