import {IUser} from './IUser';

export interface IReview {
  reviewId: number;
  user: IUser;
  comment: string;
  rating: number;
}
