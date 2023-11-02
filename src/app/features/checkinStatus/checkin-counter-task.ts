// // accumulated-visit-checker.ts
// import {
//   DispatchableEvent,
//   Task,
//   TaskOutcome,
//   TaskParams,
// } from '@awarns/core/tasks';
// import { AccumulatedAoIVisit } from './visit-counter';

// export class AccumulatedVisitChecker extends Task {
//   constructor(
//     name: string,
//   ) {
//     super(name, {
//       outputEventNames: [`${name}Finished`, 'userDidSpecialVisit'],
//     });
//   }

//   protected async onRun(
//     taskParams: TaskParams,
//     invocationEvent: DispatchableEvent
//   ): Promise<TaskOutcome> {
//     const accumulatedVisits = invocationEvent.data as Array<AccumulatedAoIVisit>;

//     const specialVisits = accumulatedVisits.filter((visit) => visit.visitNumber === 5);
    
//     // There's at least one accumulated visit with a value of 5
//     if (specialVisits.length > 0) {
//       return { eventName: 'userDidSpecialVisit', result: specialVisits }
//     }
    
//     // Otherwise, return default task event (task finished with nothing special to report)
//     return { eventName: this.outputEventNames[0] };
//   }
// }