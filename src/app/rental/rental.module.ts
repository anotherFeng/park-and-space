import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListEntryComponent } from './rental-list-entry/rental-list-entry.component';
import { RentalComponent } from './rental.component';

import { RentalService } from './shared/rental.service';

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListEntryComponent,
    RentalComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    RentalService
  ]
})
export class RentalModule {

}