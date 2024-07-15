export interface WorkoutType {
  username: string;
  workout_type: string[];
  workout_minute: number[];
  total_workout_minutes: number;
}

export interface GroupedWorkoutData {
  username: string;
  workout_types: string;
  total_workouts: number;
  total_workout_minutes: number;
}