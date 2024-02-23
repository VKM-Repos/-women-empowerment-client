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
    title: string;
    description: string;
    type: string;
    link: string;
    location: string;
    startDate: string;
    endDate: string;
    image: string;
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
        title: "",
        description: "",
        type: "",
        link: "",
        location: "",
        startDate: "",
        endDate: "",
        image: "",
      },
      setStep: (step) => set({ step }),
      setData: (data) => set((state) => ({ data: { ...state.data, ...data } })),
      resetStore: () => {
        set({
          step: 9,
          data: {
            title: "",
            description: "",
            type: "",
            link: "",
            location: "",
            startDate: "",
            endDate: "",
            image: "",
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
