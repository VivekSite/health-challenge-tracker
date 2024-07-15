import { Injectable } from '@angular/core';
import { WorkoutType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class WorkoutDataService {
  constructor() {}

  data: WorkoutType[] = [
    {
      id: 1721024146708,
      username: 'Vivek',
      workouts: [
        {
          type: 'Core Exercises',
          minutes: 25,
        },
      ],
      total_workout_minutes: 25,
    },
    {
      id: 1721024146709,
      username: 'Rishav',
      workouts: [
        {
          type: 'Back Exercise',
          minutes: 30,
        },
      ],
      total_workout_minutes: 30,
    },
    {
      id: 1721024146710,
      username: 'Harendra',
      workouts: [
        {
          type: 'Stretching Exercise',
          minutes: 20,
        },
      ],
      total_workout_minutes: 20,
    },
  ];

  getWorkoutData() {
    return this.data;
  }

  setWorkoutData(data: WorkoutType[]) {
    this.data = data;
  }

  addWorkout(username: string, workout_type: string, workout_minute: number) {
    const existingUserIndex = this.data.findIndex(
      (workout) => workout.username === username
    );
    if (existingUserIndex === -1) {
      this.data.push({
        id: Date.now(),
        username,
        workouts: [
          {
            type: workout_type,
            minutes: workout_minute,
          },
        ],
        total_workout_minutes: workout_minute,
      });
    } else {
      this.data[existingUserIndex].workouts.push({
        type: workout_type,
        minutes: workout_minute,
      });
      this.data[existingUserIndex].total_workout_minutes += workout_minute;
    }

    localStorage.setItem('data', JSON.stringify(this.data));
  }
}
