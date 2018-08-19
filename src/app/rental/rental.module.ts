import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MapModule } from '../shared/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';
import { FormsModule } from '@angular/forms';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListEntryComponent } from './rental-list-entry/rental-list-entry.component';
import { RentalComponent } from './rental.component';
import { RentalBookingComponent } from './rental-detail/rental-booking/rental-booking.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

import { RentalService } from './rental.service';
import { HelperService } from '../shared/service/helper.service';
import { UppercasePipe } from '../shared/pipes/uppercase.pipe';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path: 'rentals', component: RentalComponent, 
    children: [
      { path: '', component: RentalListComponent },
      { path: ':rentalId', component: RentalDetailComponent, canActivate: [AuthGuard] }
    ]},
]

@NgModule({
  declarations: [
    RentalListComponent,
    RentalListEntryComponent,
    RentalComponent,
    RentalDetailComponent,
    UppercasePipe,
    RentalBookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MapModule,
    Daterangepicker,
    FormsModule
  ],
  providers: [
    RentalService,
    HelperService
  ]
})

export class RentalModule {}