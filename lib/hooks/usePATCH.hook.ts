import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { authApi, publicApi } from "@/lib/config/axiosInstance";

export const usePATCH = (
  url: string,
  withAuth = true,
  storeCallback = undefined,
  contentType = "application/json",
  method = "PUT"
) => {
  const { mutate, isPending, isError, isSuccess, data, error } = useMutation({
    mutationFn: async (values: any) => {
      const axiosInstance = withAuth ? authApi : publicApi;
      const response =
        method == "PUT"
          ? await axiosInstance.put(url, values, {
              headers: {
                "Content-Type": contentType,
              },
            })
          : await axiosInstance.patch(url, values, {
              headers: {
                "Content-Type": contentType,
              },
            });
      return response?.data;
    },
    onSuccess: (returnedData) => {
      console.log(returnedData);
      toast.success("Success");

      // storeCallback && storeCallback(returnedData)
    },
    onError: (err) => {
      // (err?.data?.message instanceof Array) ? toast.error(err?.data?.message[0]) : toast.error(err?.data?.message)
      console.log(err);
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
