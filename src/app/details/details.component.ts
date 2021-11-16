import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { PhoneBookService } from '../phone-book/phone-book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  contact!: Contact;
  //@Input() name!: String;
  constructor(
    private phoneBookService: PhoneBookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name != null) {
      this.contact = this.phoneBookService.getContact(name);
    }
  }
}
