export type VehicleCategory = 'sedan' | 'suv' | 'truck' | 'rv';

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  category: 'interior' | 'exterior' | 'full' | 'specialty';
  duration: string;
  startingPrice: string;
  description: string;
  interiorFeatures: string[];
  exteriorFeatures: string[];
  recommendedFor: string;
  isPopular?: boolean;
  image: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  category: 'rv' | 'exterior' | 'interior' | 'suv';
  vehicle: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  summary: string;
  serviceCompleted: string;
  duration: string;
}

export interface ClientReview {
  id: string;
  author: string;
  location: string;
  vehicle: string;
  rating: number;
  message: string;
  service: string;
  date: string;
  verified: boolean;
  isChatVerified?: boolean;
  screenshotUrl?: string;
}

export interface BookingState {
  step: number;
  vehicleCategory: VehicleCategory;
  vehicleDetails: string;
  selectedServiceId: string;
  selectedAddons: string[];
  serviceDate: string;
  preferredTime: string;
  serviceAddress: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialInstructions: string;
}
