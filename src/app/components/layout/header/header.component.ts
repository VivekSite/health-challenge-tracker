import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { FloatLabelModule } from 'primeng/floatlabel';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WorkoutType } from '../../../types';
import { WorkoutDataService } from '../../../services/workout-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    FloatLabelModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private wd: WorkoutDataService
  ) {}

  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  handleWorkoutAddition = () => {};
  workoutAddingForm!: FormGroup;
  ngOnInit() {
    if (!localStorage.getItem('data')) {
      localStorage.setItem('data', JSON.stringify(this.wd.getWorkoutData()));
    } else {
      this.wd.setWorkoutData(JSON.parse(localStorage.getItem('data') || ''))
    }

    this.workoutAddingForm = this.fb.group({
      username: ['', Validators.required],
      workout_type: ['', Validators.required],
      workout_minute: ['', Validators.required],
    });

    this.handleWorkoutAddition = () => {
      this.wd.addWorkout(
        this.workoutAddingForm.value.username,
        this.workoutAddingForm.value.workout_type,
        this.workoutAddingForm.value.workout_minute
      );

      this.workoutAddingForm.reset();
      this.hideDialog();
    };
  }

  isInValidField(field: string) {
    const input = this.workoutAddingForm.get(field);
    return input?.dirty && input?.invalid;
  }
}