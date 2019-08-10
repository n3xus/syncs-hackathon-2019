import {IProperty} from './IProperty';
import {IReview} from './IReview';

export interface IUser {
  userId: number;
  location: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  email: string;
  phone: string;
  description: string;
  rating: number;
  properties?: IProperty[];
  reviews?: IReview[];
}
