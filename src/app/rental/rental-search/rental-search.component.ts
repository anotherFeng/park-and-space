import { Component, OnInit } from '@angular/core';
import { ActivateRoute, ActivatedRoute } from '@angular/router';
import { RentalService } from '../rental.service';
import { Rental } from '../rental.model';

@Component({
  selector: 'bnb-rental-search',
  templateUrl: './rental-search.component.html',
  styleUrls: ['./rental-search.component.scss']
})
export class RentalSearchComponent implements OnInit {

  city: string;
  rentals: Rental[] = [];
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.city = params['city'];
      this.getSearchRentals();
    });
  };

  getSearchRentals() {
    this.rentalService.getRentalsByCity(this.city).subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;
      },
      (err) => {
        this.error = err.error;
      }
    );
  };
};
