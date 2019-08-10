import {IUser} from './IUser';

export interface IProperty {
  propertyId: number;
  location: string;
  price: number;
  size: string;
  description: string;
  starRating: number;
  imageUrl: string;
  owner?: IUser;
}
