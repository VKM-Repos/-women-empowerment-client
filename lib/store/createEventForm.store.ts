import { create, StateCreator } from "zustand";
import {
  persist,
  PersistOptions,
  createJSONStorage,
  StateStorage,
} from "zustand/middleware";

export interface EventFormStore {
  step: number;
  data: {
    eventDetails: {
      title: string;
      description: string;
      type: string;
      link: string;
      location: string;
      startDate: string;
      endDate: string;
    };
    image: File| string;
    imagePreview: string;
  };
  setStep: (step: number) => void;
  setData: (data: Partial<EventFormStore["data"]>) => void;
  resetStore: () => void;
}

type MyPersist = (
  config: StateCreator<EventFormStore>,
  options: PersistOptions<EventFormStore>
) => StateCreator<EventFormStore>;

export const useEventFormStore = create<EventFormStore>(
  (persist as MyPersist)(
    (set) => ({
      step: 1,
      data: {
        eventDetails: {
          title: "",
          description: "",
          type: "",
          link: "",
          location: "",
          startDate: "",
          endDate: "",
        },
        image: "",
        imagePreview:""
      },
      setStep: (step) => set({ step }),
      setData: (data) => set((state) => ({ data: { ...state.data, ...data } })),
      resetStore: () => {
        set({
          step: 9,
          data: {
            eventDetails: {
              title: "",
              description: "",
              type: "",
              link: "",
              location: "",
              startDate: "",
              endDate: "",
            },
            image: "",
            imagePreview:""
          },
        });
        localStorage.removeItem("EventFormStore");
      },
    }),
    {
      name: "EventFormStore",
      getStorage: () => localStorage as StateStorage,
    }
  )
);
