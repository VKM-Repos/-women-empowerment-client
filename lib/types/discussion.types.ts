import { Category } from "./category.types";
import { User } from "./user.types";

export interface Discussion {
  id: number;
  createdBy: User;
  category: Category;
  title: string;
  content: string;
  commentsCount: number;
  createdAt: string;
}
export interface Comment {
  id: number;
  createdBy: User;
  content: string;
  createdAt: string;
}

export interface ApiResponse {
  content: Discussion[];
  page: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
}
