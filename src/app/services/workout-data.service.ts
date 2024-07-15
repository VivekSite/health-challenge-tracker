import { Injectable } from '@angular/core';
import { WorkoutType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class WorkoutDataService {
  constructor() {}

  data: WorkoutType[] = [
    {
      username: 'Vivek',
      workout_type: ['Core Exercises'],
      workout_minute: [25],
      total_workout_minutes: 25,
    },
    {
      username: 'Rishav',
      workout_type: ['Back Exercise'],
      workout_minute: [30],
      total_workout_minutes: 30,
    },
    {
      username: 'Harendra',
      workout_type: ['Stretching Exercise'],
      workout_minute: [20],
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
        username,
        workout_type: [workout_type],
        workout_minute: [workout_minute],
        total_workout_minutes: workout_minute,
      });
    } else {
      this.data[existingUserIndex].workout_type.push(workout_type);
      this.data[existingUserIndex].workout_minute.push(workout_minute);
      this.data[existingUserIndex].total_workout_minutes += workout_minute;
    }

    localStorage.setItem('data', JSON.stringify(this.data));
  }
}
