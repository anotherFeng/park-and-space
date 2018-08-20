import { Component, OnInit } from '@angular/core';
import { Rental } from '../rental.model';

@Component({
  selector: 'bnb-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.scss']
})
export class RentalCreateComponent implements OnInit {

  newRental: Rental;
  rentalCategories: string[] = [
    'condo',
    'house'
  ]

  constructor() { }

  ngOnInit() {
    this.newRental = new Rental();
    this.newRental.shared = false;
  }

  createRental() {
    console.log(this.newRental)
  }
}
