import { Component, OnInit } from '@angular/core';
import { Rental } from '../rental.model';
import { RentalService } from '../rental.service';

@Component({
  selector: 'bnb-rental-create',
  templateUrl: './rental-create.component.html',
  styleUrls: ['./rental-create.component.scss']
})
export class RentalCreateComponent implements OnInit {

  newRental: Rental;
  rentalCategories: string[] = Rental.CATEGORIES;
  error: string = '';

  constructor(
    private rentalService: RentalService;
  ) { }

  ngOnInit() {
    this.newRental = new Rental();
    this.newRental.shared = false;
  }

  createRental() {
    this.rentalService.createRental(this.newRental).subscribe(
      (response) => {
        
      },
      (err) => {
        this.error = err.error;
      }
    )
  };

  handleImageChange() {
    this.newRental.image = "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg";
  }
}
