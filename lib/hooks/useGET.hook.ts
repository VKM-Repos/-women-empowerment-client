import { useQuery } from "@tanstack/react-query";
import { authApi, publicApi } from "@/lib/config/axiosInstance";


export const useGET = ({ url, queryKey, withAuth = false, enabled }: { url: string, queryKey: any[], withAuth: boolean, enabled: boolean }) => {
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
  } = useQuery({ queryKey: queryKey, queryFn: fetch });
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

