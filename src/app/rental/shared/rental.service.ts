import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {
  private rentals: Rental[] = [{
    id: "1",
    title: "Central Apartment",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "08/02/2018"
  },
  {
    id: "2",
    title: "Central Apartment 2",
    city: "San Francisco",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "08/02/2018"
  },
  {
    id: "3",
    title: "Central Apartment 3",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "08/02/2018"
  },
  {
    id: "4",
    title: "Central Apartment 4",
    city: "New York",
    street: "Times Square",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "08/02/2018"
  }];

  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
        const rentals = this.rentals;
        const foundRental = rentals.find((rental) => {
          return rental.id === rentalId;
        });
        observer.next(foundRental);
      }, 500)
    })
  }

  public getRentals(): Observable<Rental[]> {
    const rentalOservable: Observable<Rental[]> = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
      setTimeout(() => {
        observer.error("Error");
      }, 2000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });
    return rentalOservable;
  }
}