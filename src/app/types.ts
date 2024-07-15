export interface WorkoutType {
  id: number;
  username: string;
  workouts: {
    type: string,
    minutes: number,
  }[];
  total_workout_minutes: number;
}