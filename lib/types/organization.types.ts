import { Instant, User } from "./user.types";

export type Organization = {
  id: number;
  name: string;
  logo: string;
  website: string;
  facebook: string;
  city: string;
  address: string;
  email: string;
  phoneNumber: string;
  description: string;
  createdBy: User;
  images: {
    id: number;
    url: string;
    createdAt: string;
    updatedAt: string;
  }[];
  likesCount: number;
  createdAt: Instant;
  updatedAt: Instant;
}

export interface ApiResponse {
  content: Organization[];
  page: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
}
