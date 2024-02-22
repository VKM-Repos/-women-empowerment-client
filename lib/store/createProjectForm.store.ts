import { create, StateCreator } from "zustand";
import {
  persist,
  PersistOptions,
  createJSONStorage,
  StateStorage,
} from "zustand/middleware";

export interface OrganizationFormStore {
  step: number;
  data: {
    organizationDetails: {
      name: string;
      categoryIds: number[];
      website: string;
      facebook: string;
      state: string;
      postalCode: string;
      street: string;
      email: string;
      phoneNumber: string;
      description: string;
    };
    logo: string ;
    image: string ; 
  };
  setStep: (step: number) => void;
  setData: (data: Partial<OrganizationFormStore["data"]>) => void;
  resetStore: () => void;
}

type MyPersist = (
  config: StateCreator<OrganizationFormStore>,
  options: PersistOptions<OrganizationFormStore>
) => StateCreator<OrganizationFormStore>;

export const useOrganizationFormStore = create<OrganizationFormStore>(
  (persist as MyPersist)(
    (set) => ({
      step: 1,
      data: {
        organizationDetails: {
          name: "",
          categoryIds: [],
          website: "",
          facebook: "",
          state: "",
          postalCode: "",
          street: "",
          email: "",
          phoneNumber: "",
          description: "",
        },
        logo: '',
        image: '',
      },
      setStep: (step) => set({ step }),
      setData: (data) => set((state) => ({ data: { ...state.data, ...data } })),
      resetStore: () => {
        set({
          step: 9,
          data: {
            organizationDetails: {
              name: "",
              categoryIds: [],
              website: "",
              facebook: "",
              state: "",
              postalCode: "",
              street: "",
              email: "",
              phoneNumber: "",
              description: "",
            },
            logo: '',
            image: '',
          },
        });
        localStorage.removeItem("organizationFormStore");
      },
    }),
    {
      name: "organizationFormStore",
      getStorage: () => localStorage as StateStorage,
    }
  )
);
