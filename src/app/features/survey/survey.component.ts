// src/app/features/survey/survey.component.ts

import { Component } from '@angular/core'
import {SurveyService} from './survey.service'
import { RouterExtensions } from '@nativescript/angular'
import { ActivatedRoute } from '@angular/router'
import { PlaceModel } from '../../core/models/place.model'
import { PlaceService } from '../../core/services/place.service'
import { Router } from '@angular/router'
import { exportData } from '../record/exportRecords';
import { awarns } from '@awarns/core'
import { QuestionnaireAnswer, QuestionnaireAnswers } from '../record/contextualRecords';
import { recordsStore } from '@awarns/persistence'
import { Change } from '@awarns/core/entities'

@Component({
  moduleId: module.id,
  selector: 'ns-survey',
  styleUrls: ['survey.component.css'],
  templateUrl: 'survey.component.html',
})

export class SurveyComponent {
  
  survey: any; // Define a suitable type for your survey data
  userResponses: { questionId: number, emojiValue: number }[] = [];
  _userResponses: QuestionnaireAnswer[] = [];

  currentQuestionIndex: number = 0;

  constructor(
    private surveyService: SurveyService,  
    private router: Router,
    ) {

    // Retrieve survey data from the service
    this.survey = this.surveyService.getSurvey();

    
    // recordsStore.listLast('aoi-proximity-change').subscribe((record) => {
    //   record.change === Change.START
    // });
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

    console.log('User responses saved:', this.userResponses);

    const answers = new QuestionnaireAnswers('0', this._userResponses);

    awarns.emitEvent('questionnaireAnswersAcquired', answers);

    return this.userResponses
  }

  sendResponses() {
      exportData('Responses');
    }
  
  }
