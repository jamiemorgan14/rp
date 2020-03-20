export interface RestaurantResults {
  totalResults: number;
  data: Restaurant[];
  numResults: number;
  page: number;
  pages: number;
  morePages: boolean;
}

export interface Geo {
  lon: number;
  lat: number;
}

export interface Address {
  city: string;
  formatted: string;
  street: string;
  state: string;
  postal_code: string;
}

export interface Restaurant {
  geo: Geo;
  hours: string;
  address: Address;
  restaurant_phone: string;
  restaurant_id: number;
  price_range: string;
  menus: any[];
  price_range_100: number;
  cuisines: string[];
  restaurant_name: string;
}
