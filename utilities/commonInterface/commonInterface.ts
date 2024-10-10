import { StaticImageData } from "next/image";

export interface GenericObjectInterface {
  [key: string]: any;
}

export type CustomResponse<T> = {
  data: T;
  status: number;
};

export interface Card1Interface {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  link?: string;
}

export interface Card4Interface {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  footerText: string;
  link?: string;
}

export interface Card5Interface {
  id: number;
  name: string;
  about: string;
  designation: string;
  qualification: string;
  image?: string | StaticImageData;
}

export interface CircularButtonInterface {
  variant?: "primary" | "secondary";
  link?: string;
}

export interface Blog {
  id: number;
  title: string;
  blogText: string;
  author: string;
  image?: string | StaticImageData;
  created_at: string;
  updated_at: string;
  blogCategory?: string[];
}

export interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

export interface Service {
  id: number;
  name: string;
  serviceDes: string;
  serviceCharge: number;
  serviceSpeciality: number[];
  created_at: string;
  updated_at: string;
  serviceImage?: string | StaticImageData;
  link?: string;
}

export interface ServiceState {
  services: Service[];
  loading: boolean;
  error: string | null;
}
