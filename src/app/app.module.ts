import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { DetailsComponent } from './details/details.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactAddComponent,
    DetailsComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
