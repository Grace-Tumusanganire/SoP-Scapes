// // counter-increaser.ts
// import {
//     DispatchableEvent,
//     Task,
//     TaskOutcome,
//     TaskParams,
// } from '@awarns/core/tasks';
// import { VisitCountersStore } from './visit-counters';
// import { AccumulatedAoIVisit } from './accumulated-visit';
// import { AoIProximityChange } from '@awarns/geofencing';


// export class VisitCounterIncreaser extends Task {
//     constructor(
//         name: string,
//         private store: VisitCountersStore
//     ) {
//         super(name, {
//             outputEventNames: ['visitCounterIncreased'],
//         });
//     }

//     protected async onRun(
//         taskParams: TaskParams,
//         invocationEvent: DispatchableEvent
//     ): Promise<TaskOutcome> {
//         const changes = invocationEvent.data as Array<AoIProximityChange>;

//         // The user can enter multiple overlapping areas at once
//         const aoiIds = changes.map((change) => change.aoi.id);
        
//         for (const id of aoiIds) {
//           await this.store.increase(id)
//         }
        
//         const visits = await Promise.all(aoiIds.map((id) => this.store.get(id)));
        
//         const accumulatedVisits = [];

//         for (let i = 0; i < changes.length; i++) {
//             accumulatedVisits.push(new AccumulatedAoIVisit (changes[i].aoi, visits[i])
//             );
//         }
//         return {
//           eventName: 'visitCounterIncreased', // This is optional, as this task can only produce one type of event 
//           result: accumulatedVisits
//         };
//     }
// }