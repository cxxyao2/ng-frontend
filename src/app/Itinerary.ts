export interface Itinerary {
  salesmanId: string;
  customerId: string;
  photoName?: string;
  latitude?: number;
  longitude?: number;
  visitStart?: Date;
  visitEnd?: Date;
  activities?: string;
  visitNote?: string;
}
