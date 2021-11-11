import { Component,Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { PhoneBookService } from '../phone-book/phone-book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  contact!: Contact;
  @Input() name!: String;
  constructor(private phoneBookService: PhoneBookService) {}

 ngOnInit(): void {
    this.contact = this.phoneBookService.getContact(this.name);
  }

}
