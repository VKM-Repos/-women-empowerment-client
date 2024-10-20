import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import Button from '@/components/Common/Button/Button';

export default function CommentForm({ blogId, token, refetchComments }: any) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      content: '',
    },
  });

  const addComment = async (data: any) => {
    setIsLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const endpoint = `${apiUrl}blogs/${blogId}/comments`;

      const formData = new FormData();
      formData.append('content', data.content);

      const response = await axios.post(endpoint, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        toast.success('Comment added!');
        refetchComments();
      } else {
        toast.error(`Failed to add comment: ${response.status}`);
      }
    } catch (error: any) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(addComment)}
      className="flex w-full flex-col gap-2"
    >
      <input
        type="text"
        id="content"
        placeholder="Add comment"
        {...register('content', { required: 'This field is required' })}
        className="border-gray-500 bg-primaryWhite text-gray-100 focus:outline-btnWarning rounded-l border p-2 py-3 text-base"
      />
      {errors.content && (
        <p className="text-error mt-1 text-sm">{errors.content.message}</p>
      )}

      <div className="flex w-full justify-end">
        <Button
          label={isLoading ? 'please wait...' : 'Add'}
          variant="primary"
          size="medium"
          fullWidth={false}
          state={isValid ? 'active' : 'disabled'}
          disabled={isLoading}
        />
      </div>
    </form>
  );
}
