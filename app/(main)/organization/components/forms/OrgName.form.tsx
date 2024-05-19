import React, { useState, useEffect } from 'react';
import { TransitionParent } from '@/lib/utils/transition';
import Image from 'next/image';
import StepOneImg from '@/public/images/create-org-1.png';
import Button from '@/components/Common/Button/Button';
import { useOrganizationFormStore } from '@/lib/store/createOrgForm.store';
import { useGET } from '@/lib/hooks/useGET.hook';
import { useDebouncedCallback } from 'use-debounce';
import { Label } from '@/components/UI/Label';

interface OrgNameFormProps {
  handleNext: () => void;
}

const OrgNameForm: React.FC<OrgNameFormProps> = ({ handleNext }) => {
  const { data, setData } = useOrganizationFormStore();
  const [name, setName] = useState(data.organizationDetails.name || '');
  const [nameCheckLoading, setNameCheckLoading] = useState(false);
  const [nameAvailable, setNameAvailable] = useState<boolean | null>(null);
  const [message, setMessage] = useState<{ text: string, type: 'error' | 'success' | 'searching' } | null>(null);

  const { refetch } = useGET({
    url: `organizations/name/check?name=${name}`,
    queryKey: ['nameCheck', name],
    withAuth: false,
    enabled: false,
  });

  const debouncedNameCheck = useDebouncedCallback(async (name: string) => {
    setNameCheckLoading(true);
    setMessage({ text: 'Checking organization name...', type: 'searching' });

    try {
      const response = await refetch();

      if (response.data.exists) {
        setMessage({ text: 'Organization name already exists', type: 'error' });
        setNameAvailable(false);
      } else {
        setMessage({ text: 'Organization name is available', type: 'success' });
        setNameAvailable(true);
      }
    } catch (error) {
      setMessage({ text: 'Error checking organization name. Please try again.', type: 'error' });
    } finally {
      setNameCheckLoading(false);
    }
  }, 1000);

  useEffect(() => {
    if (name.length >= 3) {
      debouncedNameCheck(name);
    }
  }, [name, debouncedNameCheck]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setName(inputValue);
    setNameAvailable(null);
    setMessage(null);

    if (inputValue.length < 3) {
      setMessage({ text: 'Please choose a name more than 3 characters', type: 'error' });
      setNameCheckLoading(false);
    } else {
      debouncedNameCheck(inputValue);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameAvailable) {
      setData({
        organizationDetails: {
          ...data.organizationDetails,
          name,
        },
      });
      handleNext();
    }
  };

  return (
    <TransitionParent>
      <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-center gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
        <div className="hidden lg:col-span-2 lg:block">
          <Image
            src={StepOneImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="flex w-full flex-col items-start space-y-6 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
          <h1 className="text-primary font-sora text-xl font-bold md:text-3xl">
            Hey there 👋
          </h1>
          <p className="font-quickSand text-base ">
            Let’s create awareness for your Organization. Enter the name of your
            organization to get started
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col pb-8 gap-1">
              <Label className='font-semibold'>Organization Name</Label>
              <input
                type='text'
                placeholder="Eg Unicef."
                value={name}
                onChange={handleInputChange}
                className='flex h-10 w-full items-center justify-between rounded-lg border-2 border-gray-500 bg-background p-2 text-sm placeholder:text-gray-300 hover:border-btnWarning focus:outline-btnWarning'
              />
              {message && (
                <p className={`mt-0 text-xs font-medium ${message.type === 'error' ? 'text-error' : message.type === 'success' ? 'text-success' : 'text-gray-300'}`}>
                  {message.text}
                </p>
              )}
            </div>
            <Button
              label={nameCheckLoading ? 'Please wait' : 'Continue'}
              variant="primary"
              fullWidth={false}
              size="medium"
              state={nameAvailable === true ? 'active' : 'disabled'}
            />
          </form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgNameForm;
