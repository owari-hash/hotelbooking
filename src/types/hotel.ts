import { ISocialLinks } from './socials';

// ----------------------------------------------------------------------

export type IHotelProps = {
  id: string;
  slug: string;
  price: number;
  heroUrl: string;
  createdAt: Date;
  coverUrl: string;
  location: string;
  duration: string;
  continent: string;
  priceSale: number;
  gallery: string[];
  favorited: boolean;
  roomTypes: Array<{
    id: string;
    name: string;
    price: number;
    available: boolean;
    capacity: number;
  }>;
  services: string[];
  description: string;
  languages: string[];
  ratingNumber: number;
  totalReviews: number;

  shareLinks: ISocialLinks;
  available: {
    start: Date;
    end: Date;
  };
  program: {
    label: string;
    text: string;
  }[];
};

export type IHotelCheckoutProps = {
  billingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  shippingAddress: {
    firstName: string;
    lastName: string;
    fullAddress: string;
    fullAddress2: string;
  };
  paymentMethods: {
    methods: string;
    card: {
      cardNumber: string;
      cardHolder: string;
      expirationDate: string;
      ccv: string;
    };
  };
};
