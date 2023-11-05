// // import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
// // import { HomeComponent } from '../home/home.component'; 
// // // import { Frame } from 'tns-core-modules/ui/frame';

// // const EVENT = 'placeTapSurvey';


// // export class GeneratePlaceSurveyTask extends Task {

  
// //   constructor() {
// //     super('generatePlaceSurvey', {
// //       outputEventNames: ['placeTapSurvey']
// //     });
// //   }

// //  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {



// //   return {
// //      eventName: EVENT
// //  };

 
// // }
// // }


// // generate-survey-task.ts

// import { Task, TaskParams, TaskOutcome, DispatchableEvent } from '@awarns/core/tasks';
// import { SurveyService } from '../survey/survey.service'; // Import the SurveyService
// import {SurveyComponent} from '../survey/survey.component'

// const EVENT = 'surveyPlaceTap';
// let display = this.SurveyComponent.showSurvey

// export class GeneratePlaceSurveyTask extends Task {

//   constructor(name : boolean) {
//     super('generatePlaceSurvey', {
//       outputEventNames: ['surveyPlaceTap'], // Trigger the task when the user moves inside an AoI
//     });
//   }

//   protected async onRun(
//     taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<TaskOutcome> {
    
//     // Retrieve the survey data from the SurveyService

//     let display = this.showSurvey;
//     display = true
//     // const surveyData = this.surveyService.getSurvey();
        
//     // Call the method to notify that the survey page is generated


//     return {
//       eventName: EVENT, // You can define a custom event name
//       result: display
//       ,
//     };
//   }

// }
