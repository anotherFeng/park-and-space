import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../../booking/booking.model';
import { HelperService } from '../../../shared/service/helper.service';

@Component({
  selector: 'bnb-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {

  @Input() dailyRate: number;
  @Input() bookings: Booking[];

  dateRange: any = {};
  bookedOutDates: any[] = [];

  public options: any = {
    locale: { format: 'Y-MM-DD' },
    alwaysShowCalendars: false,
    opens: 'left'
  };

  constructor(
    private helperService: HelperService
  ) { }

  public daterange: any = {};

  ngOnInit() {
    this.getBookedOutDate();
  }

  private getBookedOutDate() {
    if(this.bookings && this.bookings.length > 0) {
      this.bookings.forEach((booking: Booking) => {
        const bookedRange = this.helperService.getRangeOfDates(booking.startAt, booking.endAt);
        this.bookedOutDates.push(...bookedRange);
      })
    }
  }

  public selectedDate(value: any, datepicker?: any) {
      console.log(value);
      datepicker.start = value.start;
      datepicker.end = value.end;
      this.daterange.start = value.start;
      this.daterange.end = value.end;
      this.daterange.label = value.label;
  }

}
