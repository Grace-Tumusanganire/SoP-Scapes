// src/app/features/survey/survey.component.ts

import { Component } from '@angular/core'

import { ActivatedRoute } from '@angular/router'
import { PlaceModel } from '../../core/models/place.model'
import { PlaceService } from '../../core/services/place.service'

@Component({
  moduleId: module.id,
  selector: 'ns-survey',
  templateUrl: 'survey.component.html',
})
export class SurveyComponent {

place: PlaceModel | undefined = undefined

currentQuestionIndex: number = 0;
  selectedAnswer: string;

constructor(
  private activatedRoute: ActivatedRoute,
  private placeService: PlaceService
) {}


ngOnInit(): void {
  const id = +this.activatedRoute.snapshot.params.id
  if (id) {
    this.place = this.placeService.getPlaceById(id)
  }
}

onNextQuestion() {
  // Check if the user has selected an answer
  if (this.selectedAnswer) {
    // Move to the next question
    this.currentQuestionIndex++;
    // Reset the selected answer for the new question
    this.selectedAnswer = '';
  } else {
    console.log("No answer provided")
    }
}

onAnswerSelected(answer: string) {
  this.selectedAnswer = answer;
}

}