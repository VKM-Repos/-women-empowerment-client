import { useQuery } from "@tanstack/react-query";
import { authApi, publicApi } from "@/lib/config/axiosInstance";
import { checkPropTypes } from "prop-types";

export const useGET = ({ url, queryKey, withAuth = false, enabled }) => {
  const fetch = async () => {
    const axiosInstance = withAuth ? authApi : publicApi;
    const response = await axiosInstance.get(url);
    return response?.data;
  };

  const {
    data,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
    isRefetching,
    isLoadingError,
    isRefetchError,
  } = useQuery({ queryKey: queryKey, queryFn: fetch, enabled: enabled, refetchOnWindowFocus: "false", refetchOnReconnect: "false" });
  return {
    data,
    isFetching,
    isLoading,
    isError,
    isSuccess,
    refetch,
    isRefetching,
    isLoadingError,
    isRefetchError,
  };
};

