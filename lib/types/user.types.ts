
export interface UserResponse {
  userId: string;
  email: string;
}

export interface UserErrorResponse {
  status: boolean;
  message: string;
  data: Record<string, any>;
}
