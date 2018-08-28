import { Booking } from '../booking/booking.model';

export class Rental {

  static readonly CATEGORIES = ['house', 'apartment', 'condo'];

  _id: string;
  title: string;
  city: string;
  street: string;
  category: string;
  image: string;
  space: number;
  description: string;
  dailyRate: number;
  surveillance: boolean;
  createdAt: string;
  bookings: Booking[];
}
