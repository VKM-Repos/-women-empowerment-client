export type ResetPasswordRequest = {
  otp: string;
  newPassword: string;
  email: string;
};

export type ChangePasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export type ResetCodeRequest = {
  email: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterUserRequest = {
  email: string;
  password: string;
};


export type UserResponse = {
  status: boolean;
  message: string;
  data: Record<string, any>;
};

export type SignupResponse = {
    id: number,
    name: string,
    bio: string,
    email: string,
    enabled: boolean,
    isEmailVerified: boolean,
    createdAt: string,
    updatedAt: string
  
};
export type LoginResponse = {
    token: string,  
    refreshToken: string,  
};

export type VerifyTokenResponse = {
  status: boolean;
  message: string;
  data: Record<string, any>;
}

export type ErrorResponse = {
  status: boolean;
  message: string;
  data: Record<string, any>;
};
