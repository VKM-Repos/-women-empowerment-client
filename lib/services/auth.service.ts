import { AxiosResponse } from "axios";
import { authApi, publicApi } from "../config/axiosInstance";
import {
  ResetPasswordRequest,
  ChangePasswordRequest,
  ResetCodeRequest,
  LoginRequest,
  RegisterUserRequest,
  ErrorResponse,
  LoginResponse,
  UserResponse,
  VerifyTokenResponse,
} from "../types/auth.types";
// import useStore from "../store/user.store";
import { removeToken, storeToken } from "../config/authHelper";

async function handleResponse<T>(response: AxiosResponse): Promise<T> {
  const contentType = response.headers["content-type"] || "";
  const isJson = contentType.includes("application/json");

  if (response.status !== 200) {
    if (isJson) {
      const errorResponse: ErrorResponse = response.data;
      throw new Error(errorResponse.message || response.statusText);
    } else {
      throw new Error(response.data.toString());
    }
  }

  return response.data as T;
}

export async function apiCreateUser(
  requestData: RegisterUserRequest
): Promise<UserResponse> {
  try {
    const response = await publicApi.post("/auth/create-user", requestData);
    const user: UserResponse = await handleResponse<UserResponse>(response);

    if (user && user.data) {
      // useStore.getState().setUserId(user.data.userId);
    }
    return user;
  } catch (error) {
    throw error;
  }
}

export async function apiLoginUser(
  email: string,
  password: string
): Promise<string> {
  const requestPayload: LoginRequest = {
    email,
    password,
  };

  try {
    const response = await publicApi.post("/auth/login", requestPayload);
    const loginResponse: LoginResponse = await handleResponse<LoginResponse>(
      response
    );

    if (loginResponse.data.accessToken && loginResponse.data.tokenType === "BEARER") {
      storeToken(loginResponse.data.accessToken);
    }

    return loginResponse.data.accessToken;
  } catch (error) {
    throw error;
  }
}

export async function apiVerifyToken(
  token: string
): Promise<VerifyTokenResponse> {
  const response = await publicApi.put(`/auth/verify/${token}`);
  return handleResponse<VerifyTokenResponse>(response);
}

export async function apiResetPassword(
  requestData: ResetPasswordRequest
): Promise<void> {
  const response = await publicApi.put("/auth/reset-password", requestData);
  return handleResponse<void>(response);
}

export async function apiChangePassword(
  requestData: ChangePasswordRequest
): Promise<void> {
  const response = await publicApi.put("/auth/change-password", requestData);
  return handleResponse<void>(response);
}

export async function apiResetCode(
  requestData: ResetCodeRequest
): Promise<void> {
  const response = await publicApi.post("/auth/reset-code", requestData);
  return handleResponse<void>(response);
}

export async function apiLogoutUser(): Promise<void> {
  try {
    removeToken();
    window.location.href = "/account/login";
  } catch (error) {
    console.error("Logout error:", error);
  }
}





