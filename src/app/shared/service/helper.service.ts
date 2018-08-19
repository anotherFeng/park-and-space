import { Injectable } from '@angular/core';
import { Booking } from '../../booking/booking.model';
import * as moment from 'moment';

@Injectable()
export class HelperService {
  
  public getRangeOfDates(startAt, endAt){
    const tempDates = [];
    const momentEndAt = moment(endAt);
    let momentStartAt = moment(startAt);

    while(momentStartAt < momentEndAt) {
      tempDates.push(momentStartAt.format(Booking.DATE_FORMATE));
      momentStartAt = momentStartAt.add(1, 'day');
    };

    tempDates.push(moment(startAt).format(Booking.DATE_FORMATE));
    tempDates.push(momentEndAt.format(Booking.DATE_FORMATE));

    return tempDates;
  }
}