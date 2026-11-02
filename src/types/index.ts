export type PageView =
  | 'home'
  | 'tours'
  | 'tour-detail'
  | 'destinations'
  | 'destination-detail'
  | 'tailor-trip'
  | 'travel-styles'
  | 'guides-faqs'
  | 'about'
  | 'contact'
  | 'offers'
  | 'subscribe'
  | 'concierge-portal';

export interface SafariEnquiry {
  id: string;
  referenceCode: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Proposal Sent' | 'Confirmed' | 'Archived';
  destinations: string[];
  departureDate: string;
  returnDate: string;
  dateFlexibility: 'Exact Dates' | '+/- 3 Days' | '+/- 1 Week' | 'Flexible Season';
  adults: number;
  children: number;
  accommodationStyle: 'Luxury Eco-Lodges' | 'Mid-Range Classic Tented' | 'Ultra-Luxury Private Villas';
  budgetPerPerson: string;
  currency: 'USD' | 'EUR' | 'GBP';
  wildlifeInterests: string[];
  fullName: string;
  email: string;
  phone: string;
  country: string;
  tourId?: string;
  tourTitle?: string;
  additionalRequests: string;
  internalNotes?: string;
}
