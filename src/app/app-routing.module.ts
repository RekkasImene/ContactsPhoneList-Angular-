import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'list', component: ContactsListComponent },
  { path : '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
