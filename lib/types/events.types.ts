import { Organization } from "./organization.types";
import { Instant, LocalDate, LocalTime, User } from "./user.types";

type EventType = "PHYSICAL" | "ONLINE";

export interface Event {
  id: number;
  name: string;
  startDate: LocalDate;
  endDate: LocalDate;
  time: LocalTime;
  facebook: string;
  email: string;
  location: string;
  description: string;
  contact: string;
  image: string;
  organization: Organization;
  type: EventType;
  createdAt: Instant;
  updatedAt: Instant;
}
