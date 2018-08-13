import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bnb-rental-booking',
  templateUrl: './rental-booking.component.html',
  styleUrls: ['./rental-booking.component.scss']
})
export class RentalBookingComponent implements OnInit {

  @Input() dailyRate: number;

  constructor() { }

  ngOnInit() {
  }

  public daterange: any = {};

  public options: any = {
      locale: { format: 'YYYY-MM-DD' },
      alwaysShowCalendars: false,
      opens: 'left'
  };

  public selectedDate(value: any, datepicker?: any) {
      console.log(value);
      datepicker.start = value.start;
      datepicker.end = value.end;
      this.daterange.start = value.start;
      this.daterange.end = value.end;
      this.daterange.label = value.label;
  }

}
