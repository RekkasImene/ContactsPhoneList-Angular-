import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact!: Contact;
  @Input() name!: String;
  @Input() phone!: String;
  @Input() image!: String;
  imageW: String = '../../assets/images/warning.png';

  //@Output() contactEvent = new EventEmitter<String>();

  /*showDetails (name:string) {
    this.contactEvent.emit (name);
    }*/

  constructor(private router: Router) {}
  showDetails(nameCont: string) {
    this.router.navigate(['/details', { name: nameCont }]);
  }
}
