// src/app/features/survey/survey.component.ts

import { Component, ViewChild, ElementRef } from "@angular/core";
import { SurveyService } from "./survey.service";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { PlaceService } from "../../core/services/place.service";
import { Router } from "@angular/router";
import { exportData } from "../record/exportRecords";
import { awarns } from "@awarns/core";
import {
  InitialResponse,
  QuestionnaireAnswers,
  initialRecords,
} from "../record/initialRecords";
import { recordsStore } from "@awarns/persistence";
import { Change } from "@awarns/core/entities";
// import { AppComponent } from '~/app/app.component'
import { Device } from "tns-core-modules";
// import  * as email from '@nativescript/email';
import { Application } from "@nativescript/core";
import { CheckBox } from "@nstudio/nativescript-checkbox";

@Component({
  moduleId: module.id,
  selector: "ns-survey",
  styleUrls: ["survey.component.css"],
  templateUrl: "surveyI.component.html",
})
export class SurveyIComponent {
  @ViewChild("yourCheckBoxId") yourCheckBox: ElementRef;

  showSecondStackLayout: boolean = false;

  survey: any; // Define a suitable type for your survey data

  initialRecorded: InitialResponse[] = [];

  currentQuestionIndex: number = 0;

  email: string;
  zips: string;
  resL: string;
  yourObject = { checked: false }; // Initialize with the appropriate type and default value

  constructor(
    private surveyService: SurveyService,
    private router: Router,
    private routerExtensions: RouterExtensions
  ) {
    // Retrieve survey data from the service
    this.survey = this.surveyService.getSurvey();
  }

  // checkAndPushPreviousAnswer() {
  //   // Check if the email placeholder is not empty
  //   if (this.email.trim() !== '') {

  //      // Get the questionId based on the currentQuestionIndex
  //   const questionId = this.survey[1].questions[this.currentQuestionIndex].id;

  //     // Proceed with your logic to push the answer
  //     this.onAnsweredTyped(questionId, this.email);
  //     // Move to the next question or perform other actions
  //     this.currentQuestionIndex++; // Move to the next question

  //   } else {
  //     // Show an error message or handle the case when email is empty
  //     console.error('Email address cannot be empty');
  //   }
  // }

  // public getCheckProp() {
  //   const checkBox = this.yourCheckBox.nativeElement as CheckBox;
  //   console.log("checked prop value = " + checkBox.checked);
  // }

  // public checkedChange(modelRef) {
  //   console.log('checkedChange:', modelRef.checked);
  // }

  onAnsweredTyped(questionId: number, answerValue: string) {
    this.initialRecorded.push({ questionId, answer: answerValue });
  }

  isValidEmail(email: string): boolean {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  onEmailChange(args) {
    if (args && args.object) {
      // Access the new text value using args.object.text
      this.email = args.object.text;
    } else {
      console.error("Invalid arguments:", args);
    }
  }

  onZipsChange(args) {
    if (args && args.object) {
      // Access the new text value using args.object.text
      this.zips = args.object.text;
    } else {
      console.error("Invalid arguments:", args);
    }
  }

  onResLChange(args){
    if(args && args.object){
      this.resL = args.object.text;
    } else{
      console.error("No option selected")
    }
  }

  checkAndPushPreviousAnswer(answerValue: string) {
    const currentQuestion = this.survey[1].questions[this.currentQuestionIndex];

    if (currentQuestion.id === 1 || currentQuestion.id === 3) {
      // For text input questions
      if (currentQuestion.id === 1) {
        if (this.email.trim() !== "") {
          if (this.isValidEmail(this.email)) {
            this.onAnsweredTyped(currentQuestion.id, this.email);
            this.currentQuestionIndex++;
          } else {
            console.error("Invalid email address");
          }
        } else {
          console.error("Email address cannot be empty");
        }
      } else if (currentQuestion.id === 3) {
        if (this.zips.trim() !== "") {
          this.onAnsweredTyped(currentQuestion.id, this.zips);
          this.currentQuestionIndex++;
        } else {
          console.error("Zip code / street address cannot be empty");
        }
      }
    } else if (currentQuestion.id === 2) {
      // For button-based questions

      this.onButtonTyped(currentQuestion.id, answerValue);

      // Implement logic to handle button click answers
      if (this.resL )
      console.log("Implement logic to handle button click answers");
      this.currentQuestionIndex++;
    } else {
      console.error("Unsupported question type");
    }
  }

  onButtonTyped(questionId: number, answerValue: string) {
    this.initialRecorded.push({ questionId, answer: answerValue });
  }

  onSubmit() {
    console.log("User responses saved:", this.initialRecorded);

    const duuid = Device.uuid;
    const answersI = new QuestionnaireAnswers("1", this.initialRecorded, duuid);

    awarns.emitEvent("questionnaireAnswersAcquired", answersI);
    
    this.showSecondStackLayout = true;
    this.navigateBack()
    return answersI;

    
  }

  navigateBack() {
    setTimeout(() => {
      this.router.navigate(["/home"]);
    }, 3000); // 2000 milliseconds (2 seconds) delay, adjust as needed
  }

  sendResponses() {
    this.onSubmit();
    exportData("ResponsesInit");
    this.navigateBack() 
  }
}
