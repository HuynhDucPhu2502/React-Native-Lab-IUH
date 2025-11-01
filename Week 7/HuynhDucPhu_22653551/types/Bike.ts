export const BIKE_TYPES = ["RoadBike", "Moutain"] as const;
export type BikeType = (typeof BIKE_TYPES)[number];

export interface Bike {
  title: string;
  description: string;
  price: number;
  img: string;
  type: BikeType;
}
