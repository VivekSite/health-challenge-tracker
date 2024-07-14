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
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router, private fb: FormBuilder) {}

  visible: boolean = true;
  showDialog() {
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  challengeAddingForm!: FormGroup;
  ngOnInit() {
    this.challengeAddingForm = this.fb.group({
      username: ['', Validators.required],
      workout_type: ['', Validators.required],
      workout_minute: ['' , Validators.required],
    });
  }

  handleChallengeCreation() {
    console.log(this.challengeAddingForm);
    this.challengeAddingForm.reset();
    this.hideDialog();
  }
}
