import { Component, Input } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  //contact!: Contact;
  @Input() name!: String;
  @Input() phone!: String;
  @Input() image!: String;
  imageW: String = '../../assets/images/warning.png';

  /*constructor(private phoneBookService: PhoneBookService) {}*/

  /*ngOnInit(): void {
    this.contact = this.phoneBookService.getContact(this.name);
  }*/
}
