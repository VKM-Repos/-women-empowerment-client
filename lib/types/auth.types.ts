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

export type LoginResponse = {
  status: boolean;
  message: string;
  data: {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
    roles: string[];
    tokenType: string;
    emailVerified: boolean;
  };
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
