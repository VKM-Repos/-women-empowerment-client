export type Role = "USER" | "ORGANIZATION" | "SYSTEM_ADMIN";

export interface UserPayload {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  roles: Role[];
  tokenType: string;
  emailVerified: boolean;
}
export interface UserResponse {
  userId: string;
  email: string;
}

export interface UserErrorResponse {
  status: boolean;
  message: string;
  data: Record<string, any>;
}
