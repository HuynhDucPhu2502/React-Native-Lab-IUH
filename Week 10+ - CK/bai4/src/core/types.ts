export type Workout = {
  id: string;
  name: string;
  duration: number;
  category: "Cardio" | "Strength" | "Yoga";
  completed: boolean;
};
