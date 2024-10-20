'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useGET } from '@/lib/hooks/useGET.hook';
import { TransitionParent } from '@/lib/utils/transition';
import LoadingThinkingWomen from '@/components/Common/Loaders/LoadingThinkingWomen';
import { usePATCH } from '@/lib/hooks/usePATCH.hook';
import { usePOST } from '@/lib/hooks/usePOST.hook';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import { BreadcrumbComponent } from '../../../components/WithBreadcrumb';
import PopoverMenu from '../../components/PopoverMenu';
import EditIcon from '../../components/EditIcon';
import FormSelect from '@/components/Form/FormSelect';
import { Input } from '@/components/UI/Input';
import { FormDateTimePicker } from '@/components/Form/FormDateTimePicker';
import { Textarea } from '@/components/UI/Textarea';
import Button from '@/components/Common/Button/Button';
import { useRouter } from 'next/navigation';

const menu = [
  {
    title: 'remove',
    blank: false,
    isButton: true,
    onClick: () => {alert('removed')}
  },
  {
    title: 'change image',
    blank: false,
    isButton: true,
    onClick: () => {alert('changed')}
  },
];

export default function EditEvent({ params }: { params: { id: string } }) {
  const eventId = params?.id;
  const router = useRouter()
  const [contentType, setContentType] = useState<any>('');
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    location: '',
    link: '',
    description: '',
    startDate: '',
    endDate: '',
  });
  // console.log(eventId);
  const {
    data: event,
    isPending,
    refetch,
  } = useGET({
    url: `/events/${eventId}`,
    queryKey: ['GET_EVENT_DETAILS_EDIT_PAGER', eventId],
    withAuth: true,
    enabled: true,
  });

  const { mutate, isPending: updatingEvent } = usePATCH(
    `/events/${eventId}`,
    true,
    undefined,
    contentType
  );
  const { mutate: publishEvent, isPending: publishingEvent } = usePOST(
    `events/${eventId}/publish`
  );
  useEffect(() => {
    setFormData({
      name: event?.name,
      type: event?.type,
      location: event?.location,
      link: event?.link,
      description: event?.description,
      startDate: event?.startDate,
      endDate: event?.endDate,
    });
  }, [event]);
  const handleOnChange = (event: any) => {
    const { name, value } = event?.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const updateEvent = (event: any) => {
    setContentType('application/json');
    event.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        refetch();
        router.back()
      },
      onError: error => {
        console.log(error);
      },
    });
  };
  const handlePublishEvent = (event: any) => {
    publishEvent(
      {},
      {
        onSuccess: () => {
          router.back();
        },
        onError: () => {},
      }
    );

  };


  const [selectedOption, setSelectedOption] = useState<string>('');

  const eventOptions: any[] = ['ONLINE', 'PHYSICAL'];

  return (
    <TransitionParent>
      {updatingEvent || publishingEvent && (
        <LoadingThinkingWomen />
      ) }
        <div className="flex w-full flex-col items-stretch ">
          <BreadcrumbComponent />
          <div className="flex w-full items-center justify-start gap-4">
            <div className="bg-white-100 relative z-10 aspect-square w-[10rem] overflow-hidden rounded-full border-8 lg:w-[15rem]">
              <ImageWithFallback
                src={
                  event?.image || 'https://placehold.co/400x400?text=Women\n Hub'
                }
                fallbackSrc={'https://placehold.co/400x400?text=Women\n Hub'}
                aspectRatio={{ width: 1, height: 1 }}
                alt={event?.name}
                className=""
              />

              <div className="hover:bg-black-100/70 absolute inset-0 z-0 flex items-center justify-center transition-opacity delay-150 duration-150 hover:z-20">
                <PopoverMenu menu={menu} placeholder={<EditIcon />} />
              </div>
            </div>

            <h3 className=" font-sora text-gray-200 w-4/5 text-lg font-semibold leading-tight lg:w-3/5 lg:text-3xl">
              {event?.name}
            </h3>
          </div>

          <form  onSubmit={updateEvent}>
            <div className="font-quickSand w-[90%] mx-auto space-y-8 mt-6">
              <div className="flex w-full flex-col items-start gap-5">
                <FormBody
                  title="Date of event"
                  inputField={
                    <span className="flex gap-5">
                      <FormDateTimePicker
                        placeholder="start date"
                        date={formData.startDate}
                        onChange={(value: Date | any) =>
                          // setValue('startDate', value.toISOString().split('.')[0])
                          handleOnChange
                        }
                      />
                      <FormDateTimePicker
                        placeholder="end date"
                        date={formData.endDate}
                        onChange={(value: Date | any) =>
                          // setValue('startDate', value.toISOString().split('.')[0])
                          handleOnChange
                        }
                      />
                    </span>
                  }
                />

                <FormBody
                  title="Event title"
                  inputField={
                    <>
                      <Input
                        type="text"
                        name="name"
                        onChange={handleOnChange}
                        value={formData?.name}
                        className="placeholder:text-black/30 bg-[#F9F9F9] font-medium "
                      />
                    </>
                  }
                />
                <FormBody
                  title="Event Type"
                  inputField={
                    <>
                      <FormSelect
                        placeholder="Select event type"
                        value={formData?.type}
                        onChange={value => {
                          handleOnChange;
                          setSelectedOption(value);
                        }}
                        defaultValue={''}
                        options={eventOptions?.map(option => ({
                          label: option.toLowerCase().replace(/\s/g, '_'),
                          value: option,
                        }))}
                      />
                    </>
                  }
                />

                {formData?.type == 'ONLINE' ? (
                  <FormBody
                    title="Event link"
                    inputField={
                      <>
                        <Input
                          type="text"
                          name="link"
                          onChange={handleOnChange}
                          value={formData?.link}
                          className="placeholder:text-black/30 bg-[#F9F9F9] font-medium "
                        />
                      </>
                    }
                  />
                ) : (
                  <FormBody
                    title="Event location"
                    inputField={
                      <>
                        <Input
                          type="text"
                          name="location"
                          onChange={handleOnChange}
                          value={formData?.location}
                          className="placeholder:text-black/30 bg-[#F9F9F9] font-medium "
                        />
                      </>
                    }
                  />
                )}
                <FormBody
                  title="Event Description"
                  inputField={
                    <>
                      <Textarea
                        className="placeholder:text-gray-400 resize-none bg-[#F9F9F9] font-medium"
                        placeholder={''}
                        name="description"
                        onChange={handleOnChange}
                        value={formData?.description}
                      />
                    </>
                  }
                />
              </div>

              {event?.status == 'DRAFTS' ? (
                <div className="flex justify-center gap-5">
                  <Button
                    variant="primary"
                    state="active"
                    fullWidth={false}
                    size="medium"
                    label="Publish"
                    onClick={handlePublishEvent}
                  />
                  <Button
                    variant="outline"
                    state="active"
                    fullWidth={false}
                    size="medium"
                    label="Update"
                  />
                </div>
              ) : (
                <div className="flex justify-center">
                  <Button
                    variant="primary"
                    state="active"
                    fullWidth={false}
                    size="medium"
                    label="Update"
                  />
                </div>
              )}
            </div>
          </form>
        </div>

    </TransitionParent>
  );
}

interface FormBodyProps {
  title: string;
  inputField: React.ReactNode;
}

const FormBody = (item: FormBodyProps) => {
  return (
    <div className="grid w-full grid-cols-1 items-start justify-start gap-x-10 lg:grid-cols-12">
      <span className="font-sora text-gray-200 col-span-3 hidden h-12 w-full items-center overflow-hidden text-left  text-base font-semibold lg:flex">
        {item?.title}
      </span>
      <span className="min-h-12 w-full overflow-hidden lg:col-span-6">
        {item?.inputField}
      </span>
    </div>
  );
};
