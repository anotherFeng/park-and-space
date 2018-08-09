import { Component, OnInit } from '@angular/core';
import { RentalService } from '../rental.service';
import { Rental } from '../rental.model';

@Component({
  selector: 'bnb-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();
    rentalObservable.subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      (err) => {
      },
      () => {
      });
  }

}
