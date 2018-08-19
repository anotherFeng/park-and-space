import * as moment from 'moment';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { Booking } from '../../../booking/booking.model';
import { Rental } from '../../rental.model';
import { HelperService } from '../../../shared/service/helper.service';

@Component({
  selector: 'bnb-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {

  @Input() rental: Rental;

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
    private helperService: HelperService,
    private modalService: NgbModal
  ) { };

  ngOnInit() {
    this.newBooking = new Booking;
    this.getBookedOutDate();
  };

  private checkForInvalidDates(date) {
    return this.bookedOutDates.includes(this.helperService.formatBookingDate(date)) || date.diff(moment(), 'days') < 0;
  };
 
  private getBookedOutDate() {
    const bookings: Booking[] = this.rental.bookings;
    if(bookings && bookings.length > 0) {
      bookings.forEach((booking: Booking) => {
        const bookedRange = this.helperService.getBookingRangeOfDates(booking.startAt, booking.endAt, Booking.DATE_FORMAT);
        this.bookedOutDates.push(...bookedRange);
      })
    };
  };

  public openConfirmModal(content) {
    this.modalService.open(content);
  };

  public selectedDate(value: any, datepicker?: any) {
      this.newBooking.startAt = this.helperService.formatBookingDate(value.start);
      this.newBooking.endAt = this.helperService.formatBookingDate(value.end);
      this.newBooking.days = -(value.start.diff(value.end, 'days'));
      this.newBooking.totalPrice = this.newBooking.days * this.rental.dailyRate;
  };

};
