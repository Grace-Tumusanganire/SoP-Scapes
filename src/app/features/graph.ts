// graph.ts;

import { TaskGraph, EventListenerGenerator, RunnableTaskDescriptor } from '@awarns/core/tasks';
import { TapActionType } from '@awarns/notifications';
import { recordsStore } from '@awarns/persistence';
import { interval, lastValueFrom, Observable, of } from 'rxjs';
import { AppComponent } from '../app.component';


class AppTaskGraph implements TaskGraph {

 async describe(
    on: EventListenerGenerator,
    run: RunnableTaskDescriptor
  ): Promise<void> {

    on('startEvent', run('startDetectingCoarseHumanActivityChanges'));
    // Once a non-stationary action becomes detected, the location of the phone will be collected every 1 minute
    // The collection of the phone location will stop once the phone becomes still again



    on(
      'startEvent',
      run('sendNotification', {
        title: 'New content available', // All notifications must contain a title
        body: 'This information may be valuable for you', // The body of the notification can be provided through here 
                                                          // or inside the payload (data) of the event trigger, inside a 
                                                          // property called body
        tapAction: { // (Optional) If not provided, defaults to OPEN_APP
          type: TapActionType.DELIVER_QUESTIONS, // See the rest of the options in the TapActionType enum
          id: 'content-1', // For the app to distingish what content must be displayed after tapping the notification
        },
      })
    );

    // on('notificationTapped', run('displaySurvey'));

    // on('notificationTapped', run('generateSurveypage'));

    on('userFinishedBeingStill', run('acquirePhoneGeolocation').every(1, 'minutes').cancelOn('userStartedBeingStill'));

    // // Each time a geolocation becomes acquired, we'll check how close it is to the known areas of interest (which we'll set up later)
    on('geolocationAcquired',
      run('checkAreaOfInterestProximity', {
        nearbyRange: 200, // We can indicate from how many meters from the border of the area we understand that the phone is close to it 
        offset: 15, // Also, we can specify an offset (in meters too) to consider in the distance calculation (to mitigate the GPS error)
      })
    );

// // A survey notification is sent once the the phone is found inside the AoI
    on('movedInsideAreaOfInterest',
       run('sendNotification', {
         title: "SoP-Scapes In-situ Survey",
         body: "In-situ survey generated, tap on this notification to respond",
         tapAction: {
           type: TapActionType.DELIVER_QUESTIONS,
         }
       })
    );

    on('movedInsideAreaOfInterest', run('writeRecords'));
    // on('notificationTapped', run('writeRecords'));
    // on('notificationCleared', run('writeRecords'));

    on('questionnaireAnswersAcquired', run('writeRecords'));


// All the framework tasks output objects compatible the Record API (see core docs)
    // This allows us to persist them right after they are observed, with just a single line
  
  on('stopEvent', run('stopDetectingCoarseHumanActivityChanges'));

  }

}

export const appTaskGraph = new AppTaskGraph();