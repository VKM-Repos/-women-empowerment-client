export type LocalDate = string; // format: yyyy-MM-dd
export type LocalTime = string; // format: HH:mm:ss.SSSSSSSSS
export type Instant = string; // format: yyyy-MM-ddTHH:mm:ssZ
export interface User {
  id: number;
  name: string;
  bio: string;
  email: string;
  enabled: boolean;
  isEmailVerified: boolean;
  photoUrl?: string;
  createdAt: Instant;
  updatedAt: Instant;
}


export interface UserResponse {
  userId: string;
  email: string;
}



