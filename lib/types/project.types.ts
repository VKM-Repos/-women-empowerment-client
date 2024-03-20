import { Category } from "./category.types";
import { Organization } from "./organization.types";
import { Instant, LocalDate, LocalTime, User } from "./user.types";

type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface Project {
  id: number;
  title: string;
  category: Category;
  startDate: LocalDate;
  endDate: LocalDate;
  startTime: LocalTime;
  endTime: LocalTime;
  link: string;
  location: string;
  description: string;
  image: string;
  organization: Organization;
  status: ProjectStatus;
  createdAt: Instant;
  updatedAt: Instant;
}
