// import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
// import {AppComponent} from "../app.component";
// import { notificationsManager } from '@awarns/notifications'; 
// import { Frame } from 'tns-core-modules/ui/frame';

// const EVENT = 'displaySurvey';
// const navigationOptions = {
//   moduleName: 'survey', 
//   clearHistory: true, 
// };
// export class GenerateSurveyTask extends Task {

  
//   constructor() {
//     super('generateSurveyPage', {
//       outputEventNames: ['displaySurvey']
//     });
//   }

//  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
//   notificationsManager.onNotificationTap((notification) => {
//     if (notification.tapAction.type === 'DELIVER_QUESTIONS') {
//       setTimeout(() => {
//         Frame.topmost().navigate(navigationOptions); 
//       }, 2);
//     }
//   })

//   return {
//     eventName: EVENT
//   };
// }
// }

