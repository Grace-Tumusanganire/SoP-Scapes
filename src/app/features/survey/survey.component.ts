// src/app/features/survey/survey.component.ts

import { Component } from '@angular/core'
import {SurveyService} from './survey.service'
import { RouterExtensions } from '@nativescript/angular'
import { ActivatedRoute } from '@angular/router'
import { PlaceModel } from '../../core/models/place.model'
import { PlaceService } from '../../core/services/place.service'
import { Router } from '@angular/router'
import { UserResponsesService } from '../survey/user-responses.service'

@Component({
  moduleId: module.id,
  selector: 'ns-survey',
  styleUrls: ['survey.component.css'],
  templateUrl: 'survey.component.html',
})

export class SurveyComponent {
  // survey = this.surveyService.getSurvey()
  // constructor(private surveyService: SurveyService){}

  showSurvey: boolean = false; // Initially, the survey is hidden
  survey: any; // Define a suitable type for your survey data
  userResponses: { questionId: number, emojiValue: number }[] = [];
  currentQuestionIndex: number = 0;

  constructor(
    private surveyService: SurveyService,  
    private router: Router,
    private userResponsesService: UserResponsesService) {

    // Retrieve survey data from the service
    this.survey = this.surveyService.getSurvey();

    //Display survey
    
  }

 

  onEmojiSelected(questionId: number, answerValue: number) {
    // Check if the question ID already exists in userResponses
    const existingResponseIndex = this.userResponses.findIndex(
      (response) => response.questionId === questionId
    );
  
    if (existingResponseIndex !== -1) {
      // If the question ID already exists, update the emoji value
      this.userResponses[existingResponseIndex].emojiValue = answerValue;
    } else {
      // If the question ID doesn't exist, add a new response object
      this.userResponses.push({ questionId, emojiValue: answerValue });
    }
    this.displayNextQuestion();

  }

  displayNextQuestion() {
    if (this.currentQuestionIndex < this.survey[0].questions.length - 1) {
      // If there is a next question, increment the index
      this.currentQuestionIndex++;
    } else {
      // Showing a message or when all questions are answered.
      console.log("All questions answered.");
      this.currentQuestionIndex++; // Increment to go beyond the last question
      this.onSubmit()

    }
  }

  onSubmit() {

   // console.log(this.userResponses);

    // Send the user responses to the UserResponsesService
    this.userResponsesService.setUserResponses(this.userResponses);
    console.log('User responses saved:', this.userResponses);

    return this.userResponses
  }

  show() {
    this.showSurvey = true;
  }

  // Add a method to hide the survey
  hide() {
    this.showSurvey = false;
  }

  
  }
