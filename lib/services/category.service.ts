import { AxiosResponse } from "axios";
import { publicApi } from "../config/axiosInstance";
import { Organization } from "../types/organization.types";
import { ErrorResponse } from "../types/response.types";
import { Category } from "../types/category.types";


// Function to handle API responses
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

// Category Service Functions
export async function apiListCategories(): Promise<Category[]> {
  try {
    const response = await publicApi.get("/api/categories");
    return handleResponse<Category[]>(response);
  } catch (error) {
    throw error;
  }
}

export async function apiListOrganizationsByCategory(categoryId: number): Promise<Organization[]> {
  try {
    const response = await publicApi.get(`/api/categories/${categoryId}/organizations`);
    return handleResponse<Organization[]>(response);
  } catch (error) {
    throw error;
  }
}
