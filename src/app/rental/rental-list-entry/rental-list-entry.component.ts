import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bnb-rental-list-entry',
  templateUrl: './rental-list-entry.component.html',
  styleUrls: ['./rental-list-entry.component.scss']
})
export class RentalListEntryComponent implements OnInit {

  @Input() rentalEntry: any;

  constructor() { }

  ngOnInit() {
  }

}
