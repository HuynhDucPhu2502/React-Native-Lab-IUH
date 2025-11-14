export type Workout = {
  id: number;
  name: string;
  duration: number;
  category: "Cardio" | "Strength" | "Yoga";
  completed: boolean;
  isDeleted: boolean;
};
