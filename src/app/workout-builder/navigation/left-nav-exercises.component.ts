import {Component, OnInit} from '@angular/core';

import { WorkoutService } from '../../core/workout.service';
import { Exercise,ExercisePlan } from '../../core/model';
import { WorkoutBuilderService } from '../builder-services/workout-builder.service';

@Component({
    selector: 'abe-left-nav-exercises',
    templateUrl: './left-nav-exercises.component.html'
})
export class LeftNavExercisesComponent implements OnInit {
    public exerciseList: Array<Exercise> = [];

    constructor(private workoutService: WorkoutService,
      private workoutBuilderService:WorkoutBuilderService) {}

    ngOnInit() {
        this.exerciseList = this.workoutService.getExercises();
    }

    addExercise(exercise: Exercise) {
      this.workoutBuilderService.addExercise(
        new ExercisePlan(exercise, 30));
    }
}