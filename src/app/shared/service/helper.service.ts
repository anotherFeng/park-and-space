import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class HelperService {
  
  public getRangeOfDates(startAt, endAt){
    const tempDates = [];
    const momentEndAt = moment(endAt);
    let momentStartAt = moment(startAt);

    while(momentStartAt < momentEndAt) {
      tempDates.push(momentStartAt.format('Y-MM-DD'));
      momentStartAt = momentStartAt.add(1, 'day');
    };

    tempDates.push(moment(startAt).format('Y-MM-DD'));
    tempDates.push(momentEndAt.format('Y-MM-DD'));

    return tempDates;
  }
}