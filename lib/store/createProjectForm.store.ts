import { create, StateCreator } from "zustand";
import {
  persist,
  PersistOptions,
  createJSONStorage,
  StateStorage,
} from "zustand/middleware";

export interface ProjectFormStore {
  step: number;
  data: {
    projectDetails: {
      categoryIds: number[];
      title: string;
      location: string;
      link: string;
      description: string;
      status: string;
      startDate: string;
      endDate: string;
    };
    image: File| string;
    imagePreview: string;
  };
  setStep: (step: number) => void;
  setData: (data: Partial<ProjectFormStore["data"]>) => void;
  resetStore: () => void;
}

type MyPersist = (
  config: StateCreator<ProjectFormStore>,
  options: PersistOptions<ProjectFormStore>
) => StateCreator<ProjectFormStore>;

export const useProjectFormStore = create<ProjectFormStore>(
  (persist as MyPersist)(
    (set) => ({
      step: 1,
      data: {
         projectDetails: {
          categoryIds: [],
          title: "",
          location: "",
          link: "",
          description: "",
          status: "",
          startDate: "",
          endDate: "",
        },
        image: "",
        imagePreview: "",
      },
      setStep: (step) => set({ step }),
      setData: (data) => set((state) => ({ data: { ...state.data, ...data } })),
      resetStore: () => {
        set({
          step: 9,
          data: {
                projectDetails: {
                categoryIds: [],
                title: "",
                location: "",
                link: "",
                description: "",
                status: "",
                startDate: "",
                endDate: "",
              },
              image: "",
              imagePreview: "",
          },
        });
        localStorage.removeItem("ProjectFormStore");
      },
    }),
    {
      name: "ProjectFormStore",
      getStorage: () => localStorage as StateStorage,
    }
  )
);
