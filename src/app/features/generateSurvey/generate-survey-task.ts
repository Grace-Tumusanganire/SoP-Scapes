import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
import { notificationsManager } from '@awarns/notifications'; 
// import { Frame } from 'tns-core-modules/ui/frame';
import { Router } from '@angular/router';

const EVENT = 'displaySurvey';
// const navigationOptions = {
//   moduleName: 'survey', 
//   clearHistory: true, 
// };
export class GenerateSurveyTask extends Task {

  
  constructor(private router: Router) {
    super('generateSurveyPage', {
      outputEventNames: ['displaySurvey']
    });
  }

 protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
  notificationsManager.onNotificationTap((notification) => {
    if (notification.tapAction.type === 'DELIVER_QUESTIONS') {
        this.router.navigate(['/survey']).catch((error) => {
            console.error('Navigation error:', error);
  })

}
  return {
     eventName: EVENT
   
  };

 })
}
}
