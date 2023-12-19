export type CreateOrganizationRequest = {
  OrgName: string;
  category: string[];
  logo: string;
  webUrl?: string;
  facebookUrl?: string;
  address: AddressFormData;
  email: string;
  phone: string;
  description: string;
  images: string[];
};


export type AddressFormData = {
  city: string;
  postalCode: string;
  street: string;
};