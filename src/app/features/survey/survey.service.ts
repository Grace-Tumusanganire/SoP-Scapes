// src/app/features/survey/survey.service.ts

import { Injectable } from '@angular/core';
import { SurveyModel } from './survey.model';
import { PlaceModel } from '~/app/core/models/place.model';
import { PlaceService } from '~/app/core/services/place.service';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {

  

  private survey: SurveyModel[] = [
    {
      questionnaireId :"FrequentSurvey",
      questions: [
      {
        id:1,
        question : "1. I perform my daily main tasks in this place (work, school, chores)",
        answers : [
          { value: 1, emoji: "😡" },
          { value: 2, emoji: "😠" },
          { value: 3, emoji: "😐" },
          { value: 4, emoji: "😊" },
          { value: 5, emoji: "😃" },
        ]  
      },

      {
        id:2,
        question : "2. I gradually find this place suitable for accomplishing my tasks",
        answers : [
          { value: 1, emoji: "😡" },
          { value: 2, emoji: "😠" },
          { value: 3, emoji: "😐" },
          { value: 4, emoji: "😊" },
          { value: 5, emoji: "😃" },
        ]  
      },

      {
        id:3,
        question : "3. I feel joy when I visit this place",
        answers : [
          { value: 1, emoji: "😡" },
          { value: 2, emoji: "😠" },
          { value: 3, emoji: "😐" },
          { value: 4, emoji: "😊" },
          { value: 5, emoji: "😃" },
        ]  
      },

      {
        id:4,
        question : "4. My social interactions evolve the more I visit this place",
        answers : [
          { value: 1, emoji: "😡" },
          { value: 2, emoji: "😠" },
          { value: 3, emoji: "😐" },
          { value: 4, emoji: "😊" },
          { value: 5, emoji: "😃" },
        ]  
      },

      {
        id:5,
        question : "5. I feel safe in this place",
        answers : [
          { value: 1, emoji: "😡" },
          { value: 2, emoji: "😠" },
          { value: 3, emoji: "😐" },
          { value: 4, emoji: "😊" },
          { value: 5, emoji: "😃" },
        ]  
      },

      {
        id:6,
        question : "6. I can easily commute to this place",
        answers : [
          { value: 1, emoji: "😡" },
          { value: 2, emoji: "😠" },
          { value: 3, emoji: "😐" },
          { value: 4, emoji: "😊" },
          { value: 5, emoji: "😃" },
        ]  
      },

      {
        id:7,
        question : "7. I feel relaxed while navigating in the city",
        answers : [
          { value: 1, emoji: "😡" },
          { value: 2, emoji: "😠" },
          { value: 3, emoji: "😐" },
          { value: 4, emoji: "😊" },
          { value: 5, emoji: "😃" },
        ]  
      }
    ]
  }
  ]

getSurvey(): SurveyModel[] {
    return this.survey;
  }

  getQuestionById(id: number): { id: number; question: string; answers: { value: number; emoji: string; }[] } | undefined {
    for (const questions of this.survey) {
      for (const question of questions.questions) {
        if (question.id === id) {
          return question;
        }
      }
    }
    return undefined; // Question with the specified id not found
  }
  

  getSurveyDataForPlace(placeId: number): SurveyModel | undefined {

    const survey = this.survey.find((s)=> s.questionnaireId === placeId.toString())

    if(survey){
        return survey;
    } else {
        console.error(`Survey data not found for place ID ${placeId}`);
        return undefined;
    }


  }


 
}
