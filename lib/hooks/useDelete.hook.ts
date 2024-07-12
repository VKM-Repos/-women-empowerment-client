import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { authApi, publicApi } from '@/lib/config/axiosInstance';

export const useDELETE = (withAuth = true, storeCallback = undefined) => {
  const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
    mutationFn: async (url: string) => {
      const axiosInstance = withAuth ? authApi : publicApi;
      const response = await axiosInstance.delete(url);
      return response?.data;
    },
    onSuccess: returnedData => {
      toast.success(returnedData?.message || 'Deleted successfully');
      // storeCallback && storeCallback(returnedData);
    },
    onError: err => {
      console.log(err);
      toast.error(err?.message || 'Error deleting image');
    },
  });

  return {
    mutate,
    isPending,
    isError,
    isSuccess,
    data,
    error,
  };
};
