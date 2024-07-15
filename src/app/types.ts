export interface WorkoutType {
  id: number;
  username: string;
  workouts: {
    type: string,
    minutes: number,
  }[];
  workout_types: string;
  total_workout_minutes: number;
}