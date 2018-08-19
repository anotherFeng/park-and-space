import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Booking } from '../../booking/booking.model';

@Injectable()
export class HelperService {
  
  private getRangeOfDates(startAt, endAt, dateFormat){
    const tempDates = [];
    const momentEndAt = moment(endAt);
    let momentStartAt = moment(startAt);

    while(momentStartAt < momentEndAt) {
      tempDates.push(momentStartAt.format(dateFormat));
      momentStartAt = momentStartAt.add(1, 'day');
    };

    tempDates.push(moment(startAt).format(dateFormat));
    tempDates.push(momentEndAt.format(dateFormat));

    return tempDates;
  };

  private formatDate(date, dateFormat) {
    return moment(date).format(dateFormat);
  }

  public formatBookingDate(date) {
    return this.formatDate(date, Booking.DATE_FORMAT);
  }

  public getBookingRangeOfDates(startAt, endAt, bookingFormat) {
    return this.getRangeOfDates(startAt, endAt, bookingFormat)
  }
};