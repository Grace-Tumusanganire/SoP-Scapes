// tasks.ts;
import { Task } from '@awarns/core/tasks';
import {
  startDetectingCoarseHumanActivityChangesTask,
  stopDetectingCoarseHumanActivityChangesTask,
} from '@awarns/human-activity';
import { acquirePhoneGeolocationTask } from '@awarns/geolocation';
import { checkAreaOfInterestProximityTask } from '@awarns/geofencing';
import { sendNotificationTask } from '@awarns/notifications';
import { writeRecordsTask } from '@awarns/persistence';
import {GenerateSurveyTask} from '../features/generateSurvey/generate-survey-task'
import { Router } from '@angular/router'; // Import the Router
import {GeneratePlaceSurveyTask} from './generateSurvey/generate-survey-place-task'
export const appTasks: Array<Task> = [
  // START: human activity recognition tasks
  startDetectingCoarseHumanActivityChangesTask(),
  stopDetectingCoarseHumanActivityChangesTask(),
  // END: human activity recognition tasks (see human-activity plugin docs to learn about these tasks and more)
  
  // START: location acquisition tasks
  acquirePhoneGeolocationTask(),
  // END: location acquisition tasks (see geolocation plugin docs to learn about this task and more)
  
  // START: area of interest proximity detection tasks
  checkAreaOfInterestProximityTask(),
  // END: area of interest proximity detection tasks (see geofencing plugin docs to learn about this task and more)
  

   // START: counting the number of check-in/area/day
  // new CheckinCounterTask(),
 // END: counting the number of check-in/area/day

  
  // START: user notification tasks
  sendNotificationTask(),
  // END: user notification tasks (see notifications plugin docs to learn about this task and more)
  
  // START: app-specific tasks
  // new GenerateSurveyTask(),
  // END: app-specific tasks


  // new GeneratePlaceSurveyTask(),

  // START: information persistence tasks
  writeRecordsTask(),
  // END: information persistence tasks (see persistence plugin docs to learn about this task and more)

];
