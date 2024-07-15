import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { WorkoutType } from '../../types';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { WorkoutDataService } from '../../services/workout-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, IconFieldModule, InputIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data: WorkoutType[] = [];
  selectedRow!: WorkoutType;

  constructor(private wd: WorkoutDataService) {}

  ngOnInit() {
    this.data = this.wd.getWorkoutData();
  }
}
