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
    orgName: string;
    category: string[];
    logo: string;
    webUrl: string;
    facebookUrl: string;
    state: string;
    postalCode: string;
    street: string;
    email: string;
    phone: string;
    description: string;
    images: string[];
  };
  setStep: (step: number) => void;
  setData: (data: Partial<OrganizationFormStore["data"]>) => void;
  resetStore: () => void;
}

// Define a custom type for the persist function
type MyPersist = (
  config: StateCreator<OrganizationFormStore>,
  options: PersistOptions<OrganizationFormStore>
) => StateCreator<OrganizationFormStore>;

export const useOrganizationFormStore = create<OrganizationFormStore>(
  // Apply the custom type for persist
  (persist as MyPersist)(
    (set) => ({
      step: 1,
      data: {
        orgName: "",
        category: [],
        logo: "",
        webUrl: "",
        facebookUrl: "",
        state: "",
        postalCode: "",
        street: "",
        email: "",
        phone: "",
        description: "",
        images: [],
      },
      setStep: (step) => set({ step }),
      setData: (data) => set((state) => ({ data: { ...state.data, ...data } })),
      resetStore: () => {
        set({
          step: 9,
          data: {
            orgName: "",
            category: [],
            logo: "",
            webUrl: "",
            facebookUrl: "",
            state: "",
            postalCode: "",
            street: "",
            email: "",
            phone: "",
            description: "",
            images: [],
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
