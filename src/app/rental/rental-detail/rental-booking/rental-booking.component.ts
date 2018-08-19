import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../../booking/booking.model';
import { HelperService } from '../../../shared/service/helper.service';
import * as moment from 'moment';

@Component({
  selector: 'bnb-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {

  @Input() dailyRate: number;
  @Input() bookings: Booking[];

  newBooking: Booking;
  daterange: any = {};
  bookedOutDates: any[] = [];


  public options: any = {
    locale: { format: Booking.DATE_FORMAT },
    alwaysShowCalendars: false,
    opens: 'left',
    isInvalidDate: this.checkForInvalidDates.bind(this)
  };

  constructor(
    private helperService: HelperService
  ) { }

  ngOnInit() {
    this.newBooking = new Booking;
    this.getBookedOutDate();
  }

  private checkForInvalidDates(date) {
    return this.bookedOutDates.includes(this.helperService.formatBookingDate(date)) || date.diff(moment(), 'days') < 0;
  }
 
  private getBookedOutDate() {
    if(this.bookings && this.bookings.length > 0) {
      this.bookings.forEach((booking: Booking) => {
        const bookedRange = this.helperService.getBookingRangeOfDates(booking.startAt, booking.endAt, Booking.DATE_FORMAT);
        this.bookedOutDates.push(...bookedRange);
      })
    }
  }

  public selectedDate(value: any, datepicker?: any) {
      this.newBooking.startAt = this.helperService.formatBookingDate(value.start);
      this.newBooking.endAt = this.helperService.formatBookingDate(value.end);
      this.newBooking.days = -(value.start.diff(value.end, 'days'));
      console.log(this.newBooking)
      this.daterange.start = value.start;
      this.daterange.end = value.end;
      this.daterange.label = value.label;
  }

}
