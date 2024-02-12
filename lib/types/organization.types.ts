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
  createdAt: Instant;
  updatedAt: Instant;
}
