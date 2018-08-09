import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../rental.service';
import { Rental } from '../rental.model';

@Component({
  selector: 'bnb-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  constructor(
    private route: ActivatedRoute,
    private rentalService: RentalService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.getRental(params['rentalId']);
    })
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId).subscribe(
      (rental: Rental) => {
        this.rental = rental;
      }
    )
  }

}
