import { Instant, User } from './user.types';

export type Organization = {
  id: string;
  name: string;
  logo: string;
  website: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  city: string;
  state: string;
  street: string;
  address: string;
  email: string;
  phoneNumber: string;
  description: string;
  createdBy: User;
  coverImage: string;
  images: {
    id: number;
    url: string;
    createdAt: string;
    updatedAt: string;
  }[];
  likesCount: number;
  createdAt: Instant;
  updatedAt: Instant;
};

export interface ApiResponse {
  content: Organization[];
  page: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
}
