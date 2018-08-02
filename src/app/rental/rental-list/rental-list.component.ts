import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bnb-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals: any[] = [{
    id:1,
    title: "Central Apartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shard: false,
    createdAt: "08/02/2018"
  },
  {
    id:1,
    title: "Central Apartment 2",
    city: "San Francisco",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shard: false,
    createdAt: "08/02/2018"
  },
  {
    id:1,
    title: "Central Apartment 3",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shard: false,
    createdAt: "08/02/2018"
  },
  {
    id:1,
    title: "Central Apartment 4",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shard: false,
    createdAt: "08/02/2018"
  }
];

  constructor() { }

  ngOnInit() {
  }

}
