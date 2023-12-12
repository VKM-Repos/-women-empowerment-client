import { LOGIN_MUTATION_KEY } from "@config/queryKeys";
import { useMutation } from "react-query";
import { loginData } from "@services/mutation/login.service";
import { ToastContainer, toast } from 'react-toastify';
import { authInstanceAxios, publicInstanceAxios } from "@config/axiosInstance";


export const usePATCH = (url, withAuth = true, storeCallback = undefined) => {
    const { mutate, isLoading, isError, isSuccess, data, error } = useMutation({
        mutationFn: async (values) => {
            const axiosInstance = withAuth ? authInstanceAxios : publicInstanceAxios
            const response = await axiosInstance.patch(url, values)
            return response?.data
        },
        onSuccess: (returnedData) => {
            console.log(returnedData);
            toast.success(returnedData?.message || 'Edited successfully', {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#00923F" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
            })

            storeCallback && storeCallback(returnedData)
        },
        onError: (err) => {

            (err?.data?.message instanceof Array) ? toast.error(err?.data?.message[0]) : toast.error(err?.data?.message)
        }
    });

    return {
        mutate,
        isLoading,
        isError,
        isSuccess,
        data,
        error
    };
};
