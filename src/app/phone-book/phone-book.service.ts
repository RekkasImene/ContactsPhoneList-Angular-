import { Injectable } from '@angular/core';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root',
})
export class PhoneBookService {
  imageC: String = '../../assets/images/default-icon.jpg';
  private contacts: Contact[] = [
    {
      nameC: 'Coccinelle',
      phoneC: '01 12 34 56 78',
      imageC: '../../assets/images/gotlib-coccinelle.jpg',
    },
    {
      nameC: ' Jujube ',
      phoneC: '01 12 34 56 78',
      imageC: '../../assets/images/gotlib-jujube.jpg',
    },
    {
      nameC: ' Newton ',
      phoneC: '01 12 34 56 78',
      imageC: '../../assets/images/gotlib-newton.jpg',
    },
    {
      nameC: '',
      phoneC: '01 12 34 56 44',
      imageC: '../../assets/images/gotlib-coccinelle.jpg',
    },
    {
      nameC: ' Jujube2',
      phoneC: '',
      imageC: '../../assets/images/gotlib-jujube.jpg',
    },
  ];

  constructor() {}

  getContact(name: string): Contact {
    return this.contacts.find((contact) => contact.nameC === name) as Contact;
  }
  getContacts(): Contact[] {
    return this.contacts;
  }

  addNewContact(nameCont: string, phoneCont: string) {
    let contact: Contact = {
      nameC: nameCont,
      phoneC: phoneCont,
      imageC: this.imageC,
    };
    this.contacts.push(contact);
  }
  addContactVides() {
    let contact: Contact = {
      nameC: '',
      phoneC: '',
      imageC: this.imageC,
    };
    this.contacts.push(contact);
  }
}
